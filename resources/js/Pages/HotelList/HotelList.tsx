import { FC, useState } from "react";
import { PageProps } from "@/types";
import { AvailableHotel } from "@/types/availableHotel";
import HotelPage from "../HotelPage/HotelPage";
import Rating from "@mui/material/Rating";

const HotelList: FC<{auth:PageProps, hotelData:AvailableHotel}> = ({ hotelData, auth }) => {
  
  const [selectedHotel, setSelectedHotel] = useState<AvailableHotel | null>(null);

  const availableHotelsList = () => {
    if (hotelData) {
      return Object.values(hotelData).map((item: AvailableHotel[]) => {
        return item.map((hotelItem: AvailableHotel) => {
          return (
            <div
              className="flex flex-col lg:flex-row w-full justify-around lg:items-center border-b-2 py-4 gap-4"
              key={hotelItem.hotel_id}
            >
              <img
                src={hotelItem.hotel_img}
                className="lg:w-1/4 rounded-lg"
                alt={hotelItem.hotel_name}
              />
              <div className="flex flex-col gap-2 lg:items-center font-bold">
                <p>{hotelItem.hotel_name}</p>
                <Rating name="read-only" className="" value={hotelItem.hotel_StarCount} readOnly />
              </div>
              <div className="flex flex-col gap-2 lg:items-center">
                <p className="font-bold">{hotelItem.city_name}</p>
                <p>{hotelItem.country_name}</p>
              </div>
              <div className="flex flex-col gap-2 lg:items-center">
                <p className="font-bold">Number of Reviews</p>
                <p className="">{hotelItem.reviews_count}</p>
              </div>
              <div>
                <p className="text-2xl font-medium">{(hotelItem.room.price * hotelItem.days).toFixed(1)}<span className="ml-2">€</span></p>
              </div>
              <button
                className="bg-sky-900 text-white hover:bg-sky-600 transition-all px-8 py-4 rounded-md"
                onClick={() => setSelectedHotel(hotelItem)} 
              >
                Book
              </button>
            </div>
          );
        });
      });
    }
  };
  return (
    <div className="bg-white p-8 rounded-lg mb-20 overflow-y-scroll max-h-screen">
      {selectedHotel ? (
        <HotelPage hotelData={selectedHotel} auth={auth} />
      ) : (
        availableHotelsList() 
      )}
    </div>
  );
};

export default HotelList;


