import React, { useEffect, useState } from "react";
import GenericCarousel from "./GenericCarousel";
import CastOverlay from "../overlay/CastOverlay";
import { fetchDirectors, Director } from "../api/api.ts";

const DirectorCarousel: React.FC = () => {
    const [directors, setDirectors] = useState<Director[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDirectors = async () => {
            try {
                const data = await fetchDirectors();
                setDirectors(data);
            } catch (error) {
                setError("There was an error fetching the directors!");
                console.error(error);
            }
        };

        void getDirectors();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <GenericCarousel
            items={directors}
            renderItem={(director) => <CastOverlay id={director.id} name={director.name} imageUrl={director.photoUrl} type={director.type} />}
            title="Directores"
            bgColor={"bg-gray-200"}
        />
    );
};

export default DirectorCarousel;