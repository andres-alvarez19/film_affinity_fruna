import React from "react";
import EntityListPage from "../../pages/EntityListPage";
import CastCard from "../card/CastCard";
import { fetchActors } from "../api/api.ts";

const ActorListPage: React.FC = () => (
    <EntityListPage title="Actores" fetchEntities={fetchActors} CardComponent={CastCard} />
);

export default ActorListPage;