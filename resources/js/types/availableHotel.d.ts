export interface AvailableHotel {
    hotel_name: string;
    hotel_id: number;
    hotel_description: string;
    hotel_img: string;
    hotel_StarCount: number;
    city_name: string;
    country_name: string;
    reviews_count: number;
    room: {
        id: number;
        type: string;
        price: number;
        available_rooms: number;
    };
    days: number;
    start_date: string; 
    end_date: string;   
}
