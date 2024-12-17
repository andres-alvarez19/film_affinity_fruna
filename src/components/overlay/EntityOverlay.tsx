import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EntityOverlayProps {
    id: number;
    name: string;
    imageUrl: string;
    type?: 'actor' | 'director' | 'movies';
    size?: 'small' | 'medium' | 'large';
}

const EntityOverlay: React.FC<EntityOverlayProps> = ({ id, name, imageUrl, size = 'medium', type }) => {
    const navigate = useNavigate();
    const sizeClasses = {
        small: 'w-16 h-20 text-sm',
        medium: 'w-40 h-52 text-base',
        large: 'w-60 h-80 text-lg',
    };

    const imageSize = sizeClasses[size];

    const handleClick = () => {
        navigate(`/${type}/${id}`);
    };

    return (
        <button
            className="flex flex-row w-full items-start space-x-2 space-y-1 hover:shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out p-2 rounded-lg cursor-pointer"
            onClick={handleClick}
        >
            <img
                src={`http://localhost:8080${imageUrl}`}
                alt={`Imagen de ${name}`}
                className={`${imageSize} rounded-lg object-cover`}
            />
            <h2 className={`font-semibold break-words ${size === 'small' ? 'text-md' : 'text-lg'}`}>{name}</h2>
        </button>
    );
};

export default EntityOverlay;