import React, { useEffect, useState } from "react";
import MovieOverlay from "../overlay/MovieOverlay.tsx";
import GenericCarousel from "./GenericCarousel.tsx";
import { Movie, Director } from "../api/api.ts";
import { bestMoviesWithDirectors } from "../api/apiUtils.ts";

const RatedMoviesCarousel: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [directors, setDirectors] = useState<{ [key: number]: Director }>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBestMovies = async () => {
            try {
                const { movies, directors } = bestMoviesWithDirectors;
                setMovies(movies);
                setDirectors(directors);
            } catch (error) {
                setError("There was an error fetching the best movies!");
                console.error(error);
            }
        };

        void getBestMovies();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <GenericCarousel
            items={movies}
            renderItem={(movie) => (
                <MovieOverlay
                    title={movie.name}
                    posterUrl={movie.photoUrl}
                    director={directors[movie.directorId]?.name ?? "Unknown"}
                />
            )}
            title="Mejor puntuacion"
            bgColor={""}
        />
    );
}

export default RatedMoviesCarousel;