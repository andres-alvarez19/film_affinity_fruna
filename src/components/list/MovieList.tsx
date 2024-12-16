import React from "react";
import EntityListPage from "../../pages/EntityListPage";
import MovieCard from "../card/MovieCard";
import { fetchMovies } from "../api/api.ts";

const MovieListPage: React.FC = () => (
    <EntityListPage title="Películas" fetchEntities={fetchMovies} CardComponent={MovieCard} />
);

export default MovieListPage;