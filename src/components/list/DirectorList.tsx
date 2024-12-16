import React from "react";
import EntityListPage from "../../pages/EntityListPage";
import CastCard from "../card/CastCard";
import { fetchDirectors } from "../api/api.ts";

const DirectorListPage: React.FC = () => (
    <EntityListPage title="Directores" fetchEntities={fetchDirectors} CardComponent={CastCard} />
);

export default DirectorListPage;