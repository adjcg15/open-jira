interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En progreso: Integer iaculis porta tempus. Fusce malesuada sem mi, in consectetur risus egestas et.',
            status: 'in-progress',
            createdAt: Date.now() + 1000000
        },
        {
            description: 'Terminada: Vivamus convallis quam quis diam gravida, ut auctor tortor mollis.',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ]
}