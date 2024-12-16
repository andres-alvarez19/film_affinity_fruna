import React from 'react';

interface MovieProps {
    title: string;
    posterUrl: string;
    director: string;
}

const MovieOverlay: React.FC<MovieProps> = ({ title, posterUrl, director }) => {
    return (
        <div className="flex flex-col items-start space-y-1 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out p-2 rounded-lg">
            <img
                src={`http://localhost:8080${posterUrl}`}
                alt={`Poster of ${title}`}
                className="w-64 h-40 mb-2 rounded-lg object-cover"
            />
            <h2 className="w-64 text-lg font-bold break-words">{title}</h2>
            <h2 className="w-64 text-md font-medium break-words">{director}</h2>
        </div>
    );
};

export default MovieOverlay;
