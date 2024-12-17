import React, { useState, useEffect, useRef } from "react";
import backupImage from "../../assets/images/800x300.png";
import { allMoviesWithDirectors } from "../api/apiUtils.ts";
import { Movie } from "../api/api.ts";

const Carousel: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { movies } = allMoviesWithDirectors;
                setMovies(movies.slice(0, 5));
            } catch (error) {
                console.error("There was an error fetching the movies!", error);
            }
        };

        void fetchData();
    }, []);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
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
    }, [movies.length]);

    return (
        <section
            aria-label={"Carousel"}
            className="flex relative w-full max-w-5xl mx-auto overflow-hidden pb-2"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div
                className={`flex w-full h-full transition-transform duration-500`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {movies.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 relative w-full px-4 py-2">
                        <div className="relative">
                            <img
                                src={`http://localhost:8080${slide.overviewUrl}`}
                                alt={`Fondo del slide ${slide.name}`}
                                className="w-full h-auto max-h-96 rounded-xl"
                                onError={(e) => {
                                    e.currentTarget.src = backupImage;
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/75 via-100% to-transparent rounded-xl">
                            </div>

                            <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                                <img
                                    src={`http://localhost:8080${slide.photoUrl}`}
                                    alt={`Overlay de ${slide.name}`}
                                    className="rounded-xl w-1/4 h-auto min-w-64 ml-2 shadow-lg"
                                />
                                <div className="w-full text-white flex flex-col justify-center">
                                    <h1 className="font-bold text-2xl">{slide.name}</h1>
                                    <a
                                        href={slide.trailerUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Ver Trailer
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-2">
                {movies.map((_, index) => (
                    <button
                        tabIndex={0}
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                setCurrentIndex(index);
                            }
                        }}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            currentIndex === index ? "bg-yellow-400" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Carousel;
