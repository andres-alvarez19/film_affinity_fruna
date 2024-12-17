import React, { useEffect, useState } from "react";
import GenericCarousel from "./GenericCarousel";
import CastOverlay from "../overlay/CastOverlay";
import { fetchActors, Actor } from "../api/api.ts";

const ActorCarousel: React.FC = () => {
    const [actors, setActors] = useState<Actor[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getActors = async () => {
            try {
                const data = await fetchActors();
                setActors(data);
            } catch (error) {
                setError("There was an error fetching the directors!");
                console.error(error);
            }
        };

        void getActors();
    }, []);


    if (error) {
        return <div>{error}</div>;
    }

    return (
        <GenericCarousel
            items={actors}
            renderItem={(actor) => <CastOverlay id={actor.id} name={actor.name} imageUrl={actor.photoUrl} type={actor.type} />}
            title="Actores"
            bgColor={"bg-gray-200"}
        />
    );
};

export default ActorCarousel;