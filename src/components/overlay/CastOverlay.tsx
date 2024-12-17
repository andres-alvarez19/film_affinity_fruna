import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EntityProps {
    id: number;
    name: string;
    imageUrl: string;
    type: string;
}

const CastOverlay: React.FC<EntityProps> = ({ id, name, imageUrl, type }) => {
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
                src={`http://localhost:8080${imageUrl}`}
                alt={`Foto de ${name}`}
                className="w-40 h-52 rounded-lg object-cover"
            />
            <h2 className="w-40 text-xl font-semibold break-words text-start">{name}</h2>
        </button>
    );
};

export default CastOverlay;