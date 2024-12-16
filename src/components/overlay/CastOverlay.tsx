import React from 'react';

interface EntityProps {
    name: string;
    imageUrl: string;
}

const CastOverlay: React.FC<EntityProps> = ({ name, imageUrl }) => {
    return (
        <div className="flex flex-col items-start space-y-1 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out p-2 rounded-lg">
            <img
                src={`http://localhost:8080${imageUrl}`}
                alt={`Foto de ${name}`}
                className="w-40 h-52 rounded-lg object-cover"
            />
            <h2 className="w-40 text-xl font-semibold break-words text-start">{name}</h2>
        </div>
    );
};

export default CastOverlay;
