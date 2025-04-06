export interface User {
    id: number;
    name: string;
    email: string;
    // Add other user properties as needed
}

export interface PageProps<T = Record<string, unknown>> {
    auth: {
        user: User | null;
    };
    errors: Record<string, string>;
    // Add any other global props your pages receive
    [key: string]: unknown;
}