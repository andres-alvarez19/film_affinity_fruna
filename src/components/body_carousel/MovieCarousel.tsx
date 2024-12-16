import React, { useEffect, useState } from "react";
import MovieOverlay from "../overlay/MovieOverlay.tsx";
import GenericCarousel from "./GenericCarousel.tsx";
import { allMoviesWithDirectors } from "../api/apiUtils.ts";
import { Movie, Director } from "../api/api.ts";

const MovieCarousel: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [directors, setDirectors] = useState<{ [key: number]: Director }>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { movies, directors } = allMoviesWithDirectors;
                setMovies(movies);
                setDirectors(directors);
            } catch (error) {
                setError("There was an error fetching the movies!");
                console.error(error);
            }
        };

        void fetchData();
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
                    director={directors[movie.id]?.name ?? "Unknown"}
                />
            )}
            title="Peliculas"
            bgColor={""}
        />
    );
};

export default MovieCarousel;