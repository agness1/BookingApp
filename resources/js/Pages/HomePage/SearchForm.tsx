import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const SearchForm: FC = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate]: any = dateRange;

    return (
        <form className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center my-14 lg:border-orange-500 lg:border-4 rounded-md p-4 lg:p-0 lg:h-16">
            <select
                name=""
                id=""
                className="w-full lg:border-orange-500 lg:border-r-4 "
            >
                <option>Where?</option>
                <select>
                    <option>1</option>
                </select>

                <option>2 </option>
            </select>

            <div className="w-full lg:border-orange-500 lg:border-r-4 flex justify-between items-center">
                <div className="lg:w-1/3 w-1/2 bg-white h-14 flex items-center p-2 gap-2">
                    <p className="">When?</p>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update: any) => {
                        setDateRange(update);
                    }}
                    withPortal
                    className="w-full h-14 border-none cursor-pointer hover:bg-slate-400 transition-all"
                />  
            </div>
            <input className="w-full lg:border-orange-500 lg:border-r-4" type="number" placeholder="Number of people"/>
            
            <input
                type="submit"
                value="Search"
                className="lg:w-1/3 lg:bg-blue-600 bg-blue-900 h-10 lg:h-auto text-white font-bold cursor-pointer hover:bg-blue-950 transition-all"
            ></input>
        </form>
    );
};
export default SearchForm;
