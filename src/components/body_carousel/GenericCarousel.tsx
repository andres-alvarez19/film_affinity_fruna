import React, { useEffect, useRef, useState } from "react";

interface GenericCarouselProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    title: string;
    bgColor: string;
}

const GenericCarousel = <T,>({ items, renderItem, title, bgColor }: GenericCarouselProps<T>) => {
    const carouselRef = useRef<HTMLUListElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        if (carouselRef.current) {
            setCanScrollLeft(carouselRef.current.scrollLeft > 0);
            setCanScrollRight(
                carouselRef.current.scrollLeft + carouselRef.current.offsetWidth < carouselRef.current.scrollWidth
            );
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener("scroll", updateScrollButtons);
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener("scroll", updateScrollButtons);
            }
        };
    }, []);


const scrollLeft = () => {
    if (carouselRef.current) {
        const children = Array.from(carouselRef.current.children) as HTMLElement[];
        const currentScrollLeft = carouselRef.current.scrollLeft;
        let found = false;
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].offsetLeft < currentScrollLeft) {
                carouselRef.current.scrollTo({ left: children[i].offsetLeft, behavior: "smooth" });
                found = true;
                break;
            }
        }
        if (!found) {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    }
};

const scrollRight = () => {
    if (carouselRef.current) {
        const children = Array.from(carouselRef.current.children) as HTMLElement[];
        const currentScrollLeft = carouselRef.current.scrollLeft;
        const carouselWidth = carouselRef.current.offsetWidth;

        for (const element of children) {
            const elementRightEdge = element.offsetLeft + element.offsetWidth;
            if (elementRightEdge > currentScrollLeft + carouselWidth) {
                carouselRef.current.scrollTo({ left: elementRightEdge - carouselWidth, behavior: "smooth" });
                break;
            }
        }
    }
};
    return (
        <div className={`relative w-full max-w-full overflow-x-hidden ${bgColor}`}>
            <div className="pl-3 pt-6">
                <h1 className="pl-2 border-l-4 border-gray-800 text-2xl font-bold">{title}</h1>
            </div>

            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                >
                    &lt;
                </button>
            )}

            <ul ref={carouselRef} className="flex flex-row overflow-x-auto space-x-1 pl-4 pt-1 pb-4 scroll-smooth">
                {items.map((item, index) => (
                    <li key={index} className="flex-shrink-0">
                        {renderItem(item)}
                    </li>
                ))}
            </ul>

            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                >
                    &gt;
                </button>
            )}
        </div>
    );
};

export default GenericCarousel;