import React from "react";
import MovieOverlay from "../overlay/MovieOverlay.tsx";
import GenericCarousel from "./GenericCarousel.tsx";

const movies = [
    { id: 1, title: "Top Gun", posterUrl: "https://via.placeholder.com/150x200?text=Top+Gun", director: "Tony Scott" },
    { id: 2, title: "The Godfather", posterUrl: "https://via.placeholder.com/150x200?text=The+Godfather", director: "Francis Ford Coppola" },
    { id: 3, title: "Inception", posterUrl: "https://via.placeholder.com/150x200?text=Inception", director: "Christopher Nolan" },
    { id: 4, title: "Forrest Gump", posterUrl: "https://via.placeholder.com/150x200?text=Forrest+Gump", director: "Robert Zemeckis" },
    { id: 5, title: "Training Day", posterUrl: "https://via.placeholder.com/150x200?text=Training+Day", director: "Antoine Fuqua" },
    { id: 6, title: "Taxi Driver", posterUrl: "https://via.placeholder.com/150x200?text=Taxi+Driver", director: "Martin Scorsese" },
    { id: 7, title: "The Iron Lady", posterUrl: "https://via.placeholder.com/150x200?text=The+Iron+Lady", director: "Phyllida Lloyd" },
];

const MovieCarousel: React.FC = () => {
    return (
        <GenericCarousel
            items={movies}
            renderItem={(movie) => <MovieOverlay title={movie.title} posterUrl={movie.posterUrl} director={movie.director} />}
            title="Peliculas"
            bgColor={""}
        />
    );
}

export default MovieCarousel;