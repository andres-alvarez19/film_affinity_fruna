import React from 'react';

interface ActorProps {
    name: string;
    imageUrl: string;
}

const ActorOverlay: React.FC<ActorProps> = ({ name, imageUrl }) => {
    return (
        <div className="flex flex-col items-start space-y-1 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out p-2 rounded-lg ">
            <img
                src={imageUrl}
                alt={`Foto de ${name}`}
                className="w-32 h-44 rounded-lg object-cover"
            />
            <h2 className="font-medium">{name}</h2>
        </div>
    );
};

export default ActorOverlay;
