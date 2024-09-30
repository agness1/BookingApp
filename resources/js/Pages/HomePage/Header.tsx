import { FC } from "react";
import Navigation from "@/Layouts/Navigation";
import { PageProps } from "@/types";
import SearchForm from "./SearchForm";

const Header: FC<PageProps> = ({ auth }) => {
    return (
        <header className="pt-4 px-2 lg:px-60 bg-sky-700 w-full">
            <Navigation auth={auth} />
            <div className="text-white/90 lg:mb-20 mt-24 px-4 lg:px-0">
                <h1 className="uppercase text-3xl lg:text-5xl font-bold">
                    Find your next stay
                </h1>
                <h3 className="text-xl py-4">
                    Search low prices on hotels, homes and much more...
                </h3>
            </div>
            <SearchForm auth={auth} />
        </header>
    );
};

export default Header;
