import { FC } from "react";

const SearchForm: FC = () => {
    return (
        <form className="flex flex-col lg:flex-row justify-center my-14 border-orange-500 border-4 rounded-md h-16">
            <select
                name=""
                id=""
                className="w-full border-orange-500 border-r-4 "
            >
                <option>Where?</option>
                <select><option>1</option></select>
                
                <option>2 </option>
            </select>
            <input
                type="date"
                className="w-full border-orange-500 border-r-4"
            ></input>
            <select
                name=""
                id=""
                className="w-full border-orange-500 border-r-4"
            >
                <option disabled selected hidden>
                    {" "}
                    Number of People{" "}
                </option>
            </select>
            <input
                type="submit"
                value="Search"
                className="lg:w-1/3 bg-blue-600 text-white font-bold"
            ></input>
        </form>
    );
};
export default SearchForm;
