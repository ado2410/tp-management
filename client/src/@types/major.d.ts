interface Major {
    id: number;
    name: string;
    department_id: number;
    created_at: string;
    updated_at: string;
    department?: Major;
}