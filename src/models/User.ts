export interface User {
    id: number,
    first_name: string;
    middle_name: string;
    last_name: string;
    birth_date: number;
    birth_month: number;
    birth_year: number;
    profile_pic_url: string;
    phone_number: number;    
    role: "staff" | "admin";
}
