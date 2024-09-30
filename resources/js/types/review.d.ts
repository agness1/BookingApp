export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Review {
    id: number;
    title: string;
    description: string;
    rate: string; 
    hotel_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    user: User; 
}