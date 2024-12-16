import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    fetchMovieById,
    fetchCastByMovieId,
    Movie,
    Director,
    fetchDirectorById, fetchByActorId, ActorWithCharacter
} from "../components/api/api";
import axios from "axios";

const MovieDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [director, setDirector] = useState<Director | null>(null);
    const [actorWithCharacter, setActorWithCharacter] = useState<ActorWithCharacter[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const movieData = await fetchMovieById(Number(id));
            setMovie(movieData);
            const castData = await fetchCastByMovieId(Number(id));
            const directorData = await fetchDirectorById(Number(movieData.directorId));
            setDirector(directorData);

            const actorPromises = castData.map(castMember => fetchByActorId(Number(castMember.actorId)));
            const actorData = await axios.all(actorPromises);
            const actorsWithCharacters = actorData.map((actor, index) => ({
                ...actor,
                character: castData[index].character
            }));

            setActorWithCharacter(actorsWithCharacters);
        };

        void fetchData();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 bg-gray-100 min-h-screen max-w-screen-lg w-screen mx-auto">
            <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row">
                    <img
                        src={`http://localhost:8080${movie.photoUrl}`}
                        alt={movie.name}
                        className="w-64 h-64 object-cover rounded-lg mb-4 md:mb-0"
                    />

                    <div className="flex-1 md:ml-6">
                        <h1 className="text-3xl font-bold mb-4">{movie.name}</h1>
                        <p className="text-gray-700"><strong>Director:</strong> {director?.name}</p>
                        <p className="text-gray-600"><strong>Año de estreno:</strong> {movie.releaseYear}</p>
                        <p className="text-gray-600"><strong>Género:</strong> {movie.genre}</p>
                        <p className="text-gray-600"><strong>País:</strong> {movie.country}</p>
                        <p className="text-gray-600"><strong>Duracion:</strong> {movie.duration}</p>
                        <p className="text-gray-600"><strong>Wikipedia:</strong> {movie.wikipediaLink}</p>
                        <p className="mt-2 text-gray-700">{movie.synopsis}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reparto</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {actorWithCharacter.map((actor) => (
                            <div
                                key={actor.id}
                                className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-bold text-gray-800">{actor.name}</h3>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Personaje:</span> {actor.character}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MovieDetailPage;