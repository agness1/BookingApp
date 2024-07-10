import { FC } from "react";

const SearchForm: FC = () => {
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
            <input
                type="date"
                className="w-full lg:border-orange-500 lg:border-r-4"
            ></input>
            <select
                name=""
                id=""
                className="w-full lg:border-orange-500 lg:border-r-4"
            >
                <option disabled selected hidden>
                    {" "}
                    Number of People{" "}
                </option>
            </select>
            <input
                type="submit"
                value="Search"
                className="lg:w-1/3 lg:bg-blue-600 bg-blue-900 h-10 lg:h-auto text-white font-bold"
            ></input>
        </form>
    );
};
export default SearchForm;
