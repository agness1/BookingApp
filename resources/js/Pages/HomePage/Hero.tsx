import { FC } from "react";
import useFetchData from "@/hooks/useFetchData";
import CircularProgress from "@mui/material/CircularProgress";
import Rating from "@mui/material/Rating";
const Hero: FC = () => {
    const getHotelData = useFetchData("http://127.0.0.1:8000/hotels");
    const hotelData = getHotelData.data;
    const hotelList = () => {
        if (hotelData) {
            const hotels = Object.values(hotelData).map((item: any) => {
                return (
                    <a
                        href={route("hotelDetails", { id: item.id })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:w-1/4 bg-slate-100 cursor-pointer lg:hover:scale-110 hover:scale-105 transition-all text-lg shadow-md"
                        key={item.id}
                    >
                        <img src={item.image} className="rounded-t-md"></img>
                        <div className="p-4">
                            <p className="font-bold">{item.name} </p>
                            <div className="flex gap-2 my-2">
                                <Rating
                                    name="read-only"
                                    value={item.starCount}
                                    readOnly
                                />
                            </div>
                            <div className="flex gap-2 mt-2">
                                <p>{item.city}</p>
                            </div>
                        </div>
                    </a>
                );
            });
            return hotels;
        } else return <CircularProgress />;
    };
    return (
        <section>
            <h2 className="text-4xl font-bold text-center lg:text-left">
                Explore
            </h2>
            <div className="flex flex-wrap gap-8 justify-center p-4 ">
                {hotelList()}
            </div>
        </section>
    );
};
export default Hero;
