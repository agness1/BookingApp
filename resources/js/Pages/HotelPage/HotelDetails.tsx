import { FC } from "react";
import useFetchData from "@/hooks/useFetchData";
import Rating from "@mui/material/Rating";
import Reviews from "@/Components/Reviews";
import CircularProgress from "@mui/material/CircularProgress";
import HotelIcon from "@mui/icons-material/Hotel";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import LuggageIcon from "@mui/icons-material/Luggage";
import WifiIcon from "@mui/icons-material/Wifi";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const HotelDetails: FC = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    const getHotelData = useFetchData(`http://127.0.0.1:8000/hotel/${id}`);
    const getReviewsData = useFetchData(`http://127.0.0.1:8000/review/${id}`);
    const reviewsData:any = getReviewsData.data;
    const hotelData:any  = getHotelData.data;

    if (hotelData) {
        return (
            <div className="bg-sky-700 lg:p-8">
                <div className="w-full flex flex-col items-center gap-8 mx-auto lg:w-3/4 lg:px-8 py-8 px-2 bg-white lg:mb-8 rounded-md">
                    <img
                        src={hotelData.hotel.image_url}
                        alt="room"
                        className="lg:w-1/2 rounded-md object-cover"
                    />
                    <div className=" flex flex-col gap-8 my-4">
                        <p className="font-bold text-3xl">
                            {hotelData.hotel.name}
                        </p>
                        <div className="flex gap-2">
                            <Rating
                                name="read-only"
                                value={hotelData.hotel.star_count}
                                readOnly
                            />
                        </div>
                        <div className="flex gap-2 items-center text-xl ">
                            <p className="font-medium">Price per night:</p>
                            <p className="font-bold text-2xl ">
                                {hotelData.hotelPrice.price}
                                <span className="ml-2">€</span>
                            </p>
                        </div>
                    </div>
                    <hr className="w-full  border-black" />
                    <div className="items-center flex justify-evenly w-full  p-4 ">
                        <p className="text-lg text-left w-1/2">
                            {hotelData.hotel.description}
                        </p>

                        <div className="flex flex-col gap-2">
                            <HotelIcon fontSize="large" />
                            <KingBedIcon fontSize="large" />
                            <BathtubIcon fontSize="large" />
                            <LocalLaundryServiceIcon fontSize="large" />
                            <LuggageIcon fontSize="large" />
                            <WifiIcon fontSize="large" />
                        </div>
                    </div>
                    <hr className="w-full  border-black" />
                    <div className="mx-auto">
                        <h3 className="text-3xl font-bold text-center p-4 mb-8">
                            Reviews
                        </h3>
                        {reviewsData !== null ? (
                            <Reviews data={reviewsData} />
                        ) : (
                            <div className="flex lg:flex-row flex-col items-center text-sky-900">
                                <p className="text-xl text-center font-bold p-4 flex justify-center items-center">
                                    There are no reviews for this hotel yet.{" "}
                                </p>
                                <SentimentVeryDissatisfiedIcon />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } else
        return (
            <div className="w-full h-screen flex items-center justify-center bg-sky-200">
                <CircularProgress />
            </div>
        );
};

export default HotelDetails;
