import { FC, useEffect, useState } from "react";
import { Review } from "@/types/review";
import Rating from "@mui/material/Rating";
import { AvailableHotel } from "@/types/availableHotel";
import Reviews from "@/Components/Reviews";
import UsePostData from "@/hooks/usePostData";
import "react-datepicker/dist/react-datepicker.css";
import useFetchData from "@/hooks/useFetchData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HotelIcon from "@mui/icons-material/Hotel";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import LuggageIcon from "@mui/icons-material/Luggage";
import WifiIcon from "@mui/icons-material/Wifi";
import { PageProps } from "@/types";

interface ReservationRequest {
    userId: number;
    startDate: string;
    endDate: string;
    totalPrice: string;
    roomId: number;
}

const HotelPage: FC<{ hotelData:AvailableHotel, auth:PageProps }> = ({ hotelData, auth }) => {
    const [bookingData, setBookingData] = useState<AvailableHotel | null>(null);

    const { data: reviewsData } = useFetchData<
        Review[]
    >(`http://127.0.0.1:8000/review/${hotelData.hotel_id}`);

    const { postData, error, data } = UsePostData<ReservationRequest>(
        "http://127.0.0.1:8000/createReservation"
    );

    const renderReviews = (reviewsData: Review[] | null) => {
        if (!reviewsData) {
            return (
                <div className="flex lg:flex-row flex-col items-center justify-center text-sky-900">
                    <p className="text-xl text-center font-bold p-4 flex justify-center items-center">
                        There are no reviews for this hotel yet.
                    </p>
                    <SentimentVeryDissatisfiedIcon />
                </div>
            );
        }

        return <Reviews data={reviewsData} />;
    };

    useEffect(() => {
        if (hotelData) {
            setBookingData(hotelData);
        }
    }, [hotelData]);

    if (!bookingData) return null;

    const submitBooking = (e: any) => {
        e.preventDefault();

        const formData: ReservationRequest = {
            userId: auth.user.id,
            startDate: bookingData.start_date,
            endDate: bookingData.end_date,
            totalPrice: (bookingData.room.price * bookingData.days).toFixed(1),
            roomId: bookingData.room.id,
        };
        postData(formData);
    };

    return (
        <div className="w-full lg:px-8  px-2 bg-white mb-8 rounded-md">
            <a href="/" className="flex items-center pb-4">
                <ArrowBackIcon className="my-4" fontSize="large" />
                <span className="ml-4 font-medium text-xl">Home Page</span>
            </a>
            <div className="flex lg:flex-row flex-col">
                <img
                    src={bookingData.hotel_img}
                    alt="hotel room"
                    className="lg:w-1/2 rounded-md object-cover mb-4"
                />
                <div className="lg:h-96 lg:w-1/2 flex justify-center">
                    <div className="p-4 h-full flex flex-col justify-evenly gap-8">
                        <p className="font-bold text-2xl">
                            {bookingData.hotel_name}
                        </p>
                        <div className="flex gap-2">
                            <Rating
                                name="read-only"
                                value={bookingData.hotel_StarCount}
                                readOnly
                            />
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <p>{bookingData.reviews_count}</p>
                            <p>reviews</p>
                        </div>
                        <div className="text-2xl font-extrabold flex gap-2">
                            <p>
                                {(
                                    bookingData.room.price * bookingData.days
                                ).toFixed(1)}
                                <span className="ml-2">€</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-medium flex gap-2 items-center">
                                {bookingData.start_date} -{" "}
                                {bookingData.end_date}
                                <CalendarMonthIcon />
                            </p>
                        </div>
                        <div>
                            {!data ? (
                                auth.user ? (
                                    <form
                                        className="h-full flex flex-col items-center justify-evenly"
                                        onSubmit={submitBooking}
                                    >
                                        <input
                                            type="submit"
                                            value="Book"
                                            className="w-9/12 h-12 mt-4 bg-sky-700 text-white font-bold rounded-md hover:bg-sky-500 cursor-pointer"
                                        />
                                    </form>
                                ) : (
                                    <div className="text-center mt-4">
                                        <p className="text-lg text-red-500 mb-4">
                                            Please log in to book this hotel.
                                        </p>
                                        <a
                                            href="/login"
                                            className=" bg-sky-700 text-white font-bold rounded-md hover:bg-sky-500 px-10 py-2 "
                                        >
                                            Login
                                        </a>
                                    </div>
                                )
                            ) : (
                                <p className="text-lg font-medium text-lime-700">
                                    You can view your booking on the dashboard.
                                </p>
                            )}
                            {error ? (
                                <p className="text-red-600 font-bold lg:p-2 pt-8 ">
                                    {error.response?.data?.message}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full h-8 border-black lg:mt-32 mt-8" />
            <div className="flex-col">
                <div className="items-center flex justify-evenly w-full">
                    <p className="text-lg text-left w-1/2">
                        {bookingData.hotel_description}
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
                <hr className="w-full  border-black mt-16" />
                <div className="mx-auto mt-8">
                    <h3 className="text-3xl font-bold text-center p-4">
                        Reviews
                    </h3>
                    {renderReviews(reviewsData)}
                </div>
            </div>
        </div>
    );
};

export default HotelPage;
