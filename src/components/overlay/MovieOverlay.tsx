import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MovieProps {
    id: number;
    title: string;
    posterUrl: string;
    director?: string;
    type: string;
}

const MovieOverlay: React.FC<MovieProps> = ({ id, title, posterUrl, director, type }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${type}/${id}`);
    };

    return (
        <button
            className="flex flex-col items-start space-y-1 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out p-2 rounded-lg cursor-pointer"
            onClick={handleClick}
        >
            <img
                src={`http://localhost:8080${posterUrl}`}
                alt={`Poster of ${title}`}
                className="w-64 h-40 mb-2 rounded-lg object-cover"
            />
            <h2 className="w-64 text-lg text-left font-bold break-words">{title}</h2>
            <h2 className="w-64 text-md text-left font-medium break-words">{director}</h2>
        </button>
    );
};

export default MovieOverlay;