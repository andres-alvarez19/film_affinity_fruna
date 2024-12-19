import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Entity, fetchMoviesByActorId, fetchMoviesByDirectorId } from "../components/api/api";
import axios from "axios";

const EntityDetailPage: React.FC = () => {
    const { type, id } = useParams<{ type: string; id: string }>();
    const [entity, setEntity] = useState<Entity | null>(null);

    useEffect(() => {
        const fetchEntityDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/${type}/search/${id}`
                );
                const entityData = response.data;

                let movies;
                if (type === "actor") {
                    movies = await fetchMoviesByActorId(Number(id));
                } else {
                    movies = await fetchMoviesByDirectorId(Number(id));
                }
                setEntity({ ...entityData, movies });
            } catch (error) {
                return <div className="text-center">Error fetching entity details...</div>;
            }
        };

        void fetchEntityDetails();
    }, [type, id]);

    if (!entity) {
        return <div className="text-center">Cargando detalles...</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen max-w-screen-lg w-screen">
            <div className=" full w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row">
                    <img
                        src={`http://localhost:8080${entity.photoUrl}`}
                        alt={entity.name}
                        className="w-56 h-64 object-cover object-top rounded-lg mx-auto md:mr-6 mb-4 md:mb-0"
                    />
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-gray-800">{entity.name}</h1>
                        <p className="text-gray-600">
                            <span className="font-semibold">País:</span> {entity.country}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Fecha de nacimiento:</span> {entity.dateOfBirth}
                        </p>
                        {entity.dateOfDeath && (
                            <p className="text-gray-600">{entity.dateOfDeath}</p>
                        )}
                        {entity.wikipediaLink && (
                            <a
                                href={entity.wikipediaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline inline-block"
                            >
                                Ver en Wikipedia
                            </a>
                        )}
                        {entity.biography && (
                            <p className="text-gray-600 mt-4">{entity.biography}</p>
                        )}
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Películas Relacionadas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {entity.movies?.map(movie => (
                            <div
                                key={movie.id}
                                className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-bold text-gray-800">{movie.name}</h3>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Género:</span> {movie.genre}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Estreno:</span> {movie.releaseYear}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntityDetailPage;