import React from "react";
import { useNavigate } from "react-router-dom";
import { Entity } from "../api/api";

interface CastCardProps {
    entity: Entity;
}

const CastCard: React.FC<CastCardProps> = ({entity}) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/${entity.type}/${entity.id}`);
    };

    return (
        <button
            className="mt-2 text-left"
            onClick={handleViewDetails}
        >
            <div
                className="bg-white w-48 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                    src={`http://localhost:8080${entity.photoUrl}`}
                    alt={entity.name}
                    className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                    <h2 className="text-lg font-bold">{entity.name}</h2>
                </div>
            </div>
        </button>
    );
};

export default CastCard;
