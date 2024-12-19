import React, { useState } from "react";
import EntityListPage from "../../pages/EntityListPage";
import MovieCard from "../card/MovieCard";
import { fetchMovies } from "../api/api.ts";

const MovieListPage: React.FC = () => {
    const [genre, setGenre] = useState<string>("");
    const [year, setYear] = useState<string>("");

    const filters = (
        <>
            {/* Filtro por género */}
            <select
                className="border px-4 py-2 rounded"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            >
                <option value="">Todos los géneros</option>
                <option value="Acción">Acción</option>
                <option value="Drama">Drama</option>
                <option value="Comedia">Comedia</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
            </select>

            {/* Filtro por año */}
            <select
                className="border px-4 py-2 rounded"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            >
                <option value="">Todos los años</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </>
    );

    // Lógica de filtrado personalizada
    const fetchMoviesWithFilters = async () => {
        const movies = await fetchMovies();
        return movies.filter((movie: any) => {
            const matchesGenre = !genre || movie.genre?.toLowerCase() === genre.toLowerCase();
            const matchesYear = !year || movie.releaseYear?.toString() === year;
            return matchesGenre && matchesYear;
        });
    };

    return (
        <EntityListPage
            title="Películas"
            fetchEntities={fetchMoviesWithFilters}
            CardComponent={MovieCard}
            filters={filters}
        />
    );
};

export default MovieListPage;
