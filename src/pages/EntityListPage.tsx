import React, { useState, useEffect, ReactNode } from "react";

interface EntityListPageProps<T> {
    title: string;
    fetchEntities: () => Promise<T[]>;
    CardComponent: React.FC<{ entity: T }>;
    filters?: ReactNode;
}

const EntityListPage = <T,>({
                                title,
                                fetchEntities,
                                CardComponent,
                                filters,
                            }: EntityListPageProps<T>) => {
    const [entities, setEntities] = useState<T[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchEntities().then(setEntities);
    }, [fetchEntities]);

    const filteredEntities = entities.filter((entity) => {
        const entityData = entity as any;
        return entityData.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="p-4 max-w-screen-lg">
            <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="flex space-x-4 items-center">
                    {filters && <div className="flex space-x-4">{filters}</div>}
                    <input
                        type="text"
                        placeholder={`Buscar ${title.toLowerCase()}...`}
                        className="border px-4 py-2 rounded"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredEntities.length === 0 && (
                    <p className="ml-5 mt-10 text-gray-500">
                        No se encontraron {title.toLowerCase()}.
                    </p>
                )}
                {filteredEntities.map((entity) => (
                    <CardComponent key={(entity as any).id} entity={entity} />
                ))}
            </div>
        </div>
    );
};

export default EntityListPage;
