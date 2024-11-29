import React from "react";
import GenericCarousel from "./GenericCarousel.tsx";
import ActorOverlay from "../overlay/ActorOverlay.tsx";

const actors = [
    { id: 1, name: "Tom Cruise", imageUrl: "https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x" },
    { id: 2, name: "Al Pacino", imageUrl: "https://th.bing.com/th/id/OIP.5RzrZZyuprj1uOzLdseuPwHaE8?rs=1&pid=ImgDetMain" },
    { id: 3, name: "Leonardo DiCaprio", imageUrl: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg" },
    { id: 4, name: "Tom Hanks", imageUrl: "https://th.bing.com/th/id/R.7d3d9a7fc5c60dc0cec14fbc053d3c3e?rik=k1YSBknfXqoljA&riu=http%3a%2f%2ffr.web.img2.acsta.net%2fpictures%2f20%2f01%2f30%2f15%2f03%2f1454869.jpg&ehk=5hWkdglHsVOPhrBEf94gUFpgX%2bUVDba9ni8v3%2bbS9eE%3d&risl=&pid=ImgRaw&r=0" },
    { id: 5, name: "Denzel Washington", imageUrl: "https://th.bing.com/th/id/R.43280cfab596218824479e95382b28cd?rik=VIgtTz4HMnbKnw&pid=ImgRaw&r=0" },
    { id: 6, name: "Robert De Niro", imageUrl: "https://th.bing.com/th/id/OIP.oVQ-t4MwBBzVpdDR8QoJ2QHaJ0?rs=1&pid=ImgDetMain" },
    { id: 7, name: "Meryl Streep", imageUrl: "https://fr.web.img3.acsta.net/pictures/19/12/23/23/11/2382049.jpg" },
];

const ActorCarousel: React.FC = () => {
    return (
        <GenericCarousel
            items={actors}
            renderItem={(actor) => <ActorOverlay name={actor.name} imageUrl={actor.imageUrl} />}
            title="Actores"
            bgColor={"bg-gray-200"}
        />
    );
};

export default ActorCarousel;