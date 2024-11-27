import React, {useState, useEffect, useRef} from "react";

const Carousel: React.FC = () => {
    const slides = [
        {id: 0, urlBg: "https://via.placeholder.com/800x300?text=Slide+1", urlOverlay: "https://placehold.co/300x200", urlTrailer: "https://www.youtube.com/watch?v=juj9wukzfqo", title: "Pelicula"},
        {id: 1, urlBg: "https://via.placeholder.com/800x300?text=Slide+2", urlOverlay: "https://placehold.co/300x200", urlTrailer: "https://www.youtube.com/watch?v=juj9wukzfqo", title: "Pelicula"},
        {id: 2, urlBg:"https://via.placeholder.com/800x300?text=Slide+3", urlOverlay: "https://placehold.co/300x200", urlTrailer: "https://www.youtube.com/watch?v=juj9wukzfqo", title: "Pelicula"},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 10000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [slides.length]);

    return (
        <section
            aria-label={"Carousel"}
            className="relative w-full max-w-4xl mx-auto overflow-hidden"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >

            <div
                className={`flex transition-transform duration-500 `}
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="flex-shrink-0 relative w-full px-4 py-2">
                        <img
                            src={slide.urlBg}
                            alt={`Fondo del slide ${slide.title}`}
                            className="w-full h-auto rounded-xl"
                        />

                        <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                            <img
                                src={slide.urlOverlay}
                                alt={`Overlay de ${slide.title}`}
                                className="rounded-xl w-2/4 h-auto ml-2"
                            />
                            <div className="text-white flex flex-col justify-center">
                                <h1 className="font-bold text-2xl">{slide.title}</h1>
                                <a
                                    href={slide.urlTrailer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Ver Trailer
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((slide) => (
                    <button
                        tabIndex={0}
                        key={slide.id}
                        onClick={() => setCurrentIndex(slide.id)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                setCurrentIndex(slide.id - 1);
                            }
                        }}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            currentIndex === slide.id ? "bg-gray-800" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Carousel;
