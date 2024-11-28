import React, {useEffect, useRef, useState} from "react";
import ActorOverlay from "./ActorOverlay";

const actors = [
    { id: 1, name: "Tom Cruise", imageUrl: "https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x" },
    { id: 2, name: "Al Pacino", imageUrl: "https://th.bing.com/th/id/OIP.5RzrZZyuprj1uOzLdseuPwHaE8?rs=1&pid=ImgDetMain" },
    { id: 3, name: "Leonardo DiCaprio", imageUrl: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg" },
    { id: 4, name: "Tom Hanks", imageUrl: "https://th.bing.com/th/id/R.7d3d9a7fc5c60dc0cec14fbc053d3c3e?rik=k1YSBknfXqoljA&riu=http%3a%2f%2ffr.web.img2.acsta.net%2fpictures%2f20%2f01%2f30%2f15%2f03%2f1454869.jpg&ehk=5hWkdglHsVOPhrBEf94gUFpgX%2bUVDba9ni8v3%2bbS9eE%3d&risl=&pid=ImgRaw&r=0" },
    { id: 5, name: "Denzel Washington", imageUrl: "https://th.bing.com/th/id/R.43280cfab596218824479e95382b28cd?rik=VIgtTz4HMnbKnw&pid=ImgRaw&r=0" },
    { id: 6, name: "Robert De Niro", imageUrl: "https://th.bing.com/th/id/OIP.oVQ-t4MwBBzVpdDR8QoJ2QHaJ0?rs=1&pid=ImgDetMain" },
    { id: 7, name: "Meryl Streep", imageUrl: "https://fr.web.img3.acsta.net/pictures/19/12/23/23/11/2382049.jpg" },
];

const ActorCarousel: React.FC = () => {
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
            carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full max-w-full overflow-x-hidden bg-gray-300">

            <div className="pl-3 pt-6">
                <h1 className="pl-2 border-l-4 border-gray-800 text-2xl font-bold">Actores</h1>
            </div>

            {/* Botón Izquierdo */}
            <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 ${
                    !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                &lt;
            </button>

            {/* Carrusel */}
            <ul
                ref={carouselRef}
                className="flex overflow-x-hidden space-x-1 pl-4 pt-1 pb-4 scroll-smooth"
            >
                {actors.map((actor) => (
                    <li key={actor.id} className="flex-shrink-0 ">
                        <ActorOverlay name={actor.name} imageUrl={actor.imageUrl}/>
                    </li>
                ))}
            </ul>

            {/* Botón Derecho */}
            <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 ${
                    !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                &gt;
            </button>
        </div>
    );
};

export default ActorCarousel;
