import React from "react";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
    entity: {
        id: number;
        name: string;
        photoUrl: string;
    };
}

const MovieCard: React.FC<MovieCardProps> = ({ entity }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/movies/${entity.id}`);
    };

    return (
        <button
            className="mt-2 text-left"
            onClick={handleViewDetails}
        >
            <div className="bg-white w-72 shadow-lg overflow-hidden rounded-lg  hover:shadow-xl transition-shadow duration-300">
                <img
                    src={`http://localhost:8080${entity.photoUrl}`}
                    alt={entity.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-bold">{entity.name}</h2>
                </div>
            </div>
        </button>
    );
};

export default MovieCard;