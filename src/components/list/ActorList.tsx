import React, {useState} from "react";
import EntityListPage from "../../pages/EntityListPage";
import CastCard from "../card/CastCard";
import {fetchActors} from "../api/api.ts";

const ActorListPage: React.FC = () => {
    const [country, setCountry] = useState<string>("");

    const filters = (
        <>
            {/* Filtro por país */}
            <select
                className="border px-4 py-2 rounded"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >
                <option value="">Todos los países</option>
                <option value="USA">Estados Unidos</option>
                <option value="UK">Reino Unido</option>
                <option value="France">Francia</option>
                <option value="Spain">España</option>
            </select>
        </>
    );

    // Lógica de filtrado personalizada
    const fetchActorsWithFilters = async () => {
        const actors = await fetchActors();
        return actors.filter((actor: any) => {
            return !country || actor.country?.toLowerCase() === country.toLowerCase();
        });
    };

    return (
        <EntityListPage
            title="Actores"
            fetchEntities={fetchActorsWithFilters}
            CardComponent={CastCard}
            filters={filters}
        />
    );
};

export default ActorListPage;
