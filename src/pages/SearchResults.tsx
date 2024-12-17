import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    fetchActorByNames,
    fetchDirectorByNames,
    fetchMoviesByActorName,
} from "../components/api/api.ts";
import EntityOverlay from "../components/overlay/EntityOverlay";

const SearchResults: React.FC = () => {
    const [actors, setActors] = useState<any[]>([]);
    const [directors, setDirectors] = useState<any[]>([]);
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get("query") ?? "";

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const [actorsData, directorsData, moviesData] = await Promise.all([
                    fetchActorByNames(query).catch(() => []),
                    fetchDirectorByNames(query).catch(() => []),
                    fetchMoviesByActorName(query).catch(() => []),
                ]);

                setActors(actorsData);
                setDirectors(directorsData);
                setMovies(moviesData);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
            }
        };

        if (query.trim()) {
            void fetchResults();
        }
    }, [query]);

    if (loading) return <div className="text-white text-center mt-10">Cargando...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Resultados de búsqueda</h1>

            {/* Actores */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Actores</h2>
                {actors.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {actors.map((actor) => (
                            <EntityOverlay
                                key={actor.id}
                                id={actor.id}
                                name={actor.name}
                                imageUrl={actor.photoUrl}
                                type="actor"
                                size="medium"
                            />
                        ))}
                    </div>
                ) : (
                    <p>No se encontraron actores.</p>
                )}
            </section>

            {/* Directores */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Directores</h2>
                {directors.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {directors.map((director) => (
                            <EntityOverlay
                                key={director.id}
                                id={director.id}
                                name={director.name}
                                imageUrl={director.photoUrl}
                                type="director"
                                size="medium"
                            />
                        ))}
                    </div>
                ) : (
                    <p>No se encontraron directores.</p>
                )}
            </section>

            {/* Películas */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Películas</h2>
                {movies.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {movies.map((movie) => (
                            <EntityOverlay
                                key={movie.id}
                                id={movie.id}
                                name={movie.name}
                                imageUrl={movie.photoUrl}
                                type="movies"
                                size="medium"
                            />
                        ))}
                    </div>
                ) : (
                    <p>No se encontraron películas.</p>
                )}
            </section>
        </div>
    );
};

export default SearchResults;