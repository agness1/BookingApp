import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import useFetchData from "@/hooks/useFetchData";
import UsePostData from "@/hooks/usePostData";
import { PageProps } from "@/types";
import HotelList from "../HotelList/HotelList";

const SearchForm: FC<PageProps> = ({ auth }) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [start_date, end_date]: any = dateRange;
    const [city, setCity] = useState("");

    const { data: cityData } = useFetchData<{ cities: { name: string }[] }>(
        "http://127.0.0.1:8000/cities"
    );

    const handleChangeCity = (e: any) => setCity(e.target.value);

    const cityList = () =>
        cityData?.cities?.map((item) => (
            <option key={item.name} value={item.name}>
                {item.name}
            </option>
        )) || <option>No data available</option>;
    const { data, error, postData } = UsePostData<{
        city: string;
        start_date: Date | null;
        end_date: Date | null;
    }>("http://127.0.0.1:8000/search-available-hotels");

    const submit = (e: any) => {
        e.preventDefault();
        const formData = {
            city,
            start_date,
            end_date,
        };
        postData(formData);
    };

    const errorData = error?.response?.data?.errors;
    const errorHandle = () => {
        const test = errorData
            ? Object.values(errorData).map((item: any) => {
                  return item.map((item2: any) => {
                      return <p>{item2}</p>;
                  });
              })
            : "";
        return test;
    };
    if (!data) {
        return (
            <>
                <form
                    className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center my-10 lg:border-orange-500 lg:border-4 rounded-md p-4 lg:p-0 lg:h-16"
                    onSubmit={submit}
                >
                    <select
                        required
                        name=""
                        id=""
                        className="w-full lg:border-orange-500 lg:border-r-4 "
                        onChange={handleChangeCity}
                    >
                        {cityList()}
                    </select>
                    <div className="w-full lg:border-orange-500 lg:border-r-4 flex justify-between items-center">
                        <div className="lg:w-1/3 w-1/2 bg-white h-14 flex items-center p-2 gap-2">
                            <p className="">When?</p>
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </div>
                        <DatePicker
                            selectsRange={true}
                            startDate={start_date}
                            endDate={end_date}
                            dateFormat="yyyy-MM-dd"
                            onChange={(update: any) => {
                                setDateRange(update);
                            }}
                            withPortal
                            className="w-full h-14 border-none cursor-pointer hover:bg-slate-400 transition-all"
                        />
                    </div>
                    <input
                        required
                        className="w-full lg:border-orange-500 lg:border-r-4"
                        type="number"
                        placeholder="Number of guests"
                        min={1}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="lg:w-1/3 lg:bg-blue-600 bg-blue-900 h-10 lg:h-auto text-white font-bold cursor-pointer hover:bg-blue-950 transition-all"
                    ></input>
                </form>
                <div className="text-center my-4 text-gray-900 font-bold text-xl bg-red-500 rounded-md w-1/2 mx-auto">
                    {errorHandle()}
                </div>
            </>
        );
    } else if (
        data.message == "No available hotels found for the selected dates."
    ) {
        return (
            <div className="flex flex-col gap-4 mx-auto w-3/4 mb-14 p-4 rounded-md  bg-slate-300 text-2xl font-bold text-center ">
                <p className="text-pink-900 ">{data.message}</p>
                <button
                    className="bg-sky-900 text-white hover:bg-sky-600 transition-all px-8 py-4 rounded-md"
                    onClick={() => window.location.reload()}
                >
                    Go back
                </button>
            </div>
        );
    } else if (data) {
        return <HotelList hotelData={data} auth={auth} />;
    }
};
export default SearchForm;
