import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
const Hero: FC = () => {
    return (
        <section>
            <h2 className="text-4xl font-bold text-center lg:text-left">
                Explore
            </h2>
            <div className="flex flex-wrap gap-8 justify-center p-4 ">
                <Link
                    href={route("hotelPage")}
                    className="lg:w-1/4 bg-slate-100 cursor-pointer lg:hover:scale-110 hover:scale-105 transition-all text-lg shadow-md"
                >
                    <img
                        src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_640.jpg"
                        className="rounded-t-md"
                    ></img>
                    <div className="p-4">
                        <p className="font-bold"> Hotel name Hotel name </p>
                        <div className="flex gap-2 my-2">
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#FFD43B" }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#FFD43B" }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#FFD43B" }}
                            />
                        </div>
                        <div className="flex gap-2 mt-2">
                            <p>Miasto</p>
                            <p className="text-gray-500">Państwo</p>
                        </div>
                        <div className="flex gap-4 items-center mt-2">
                            <p className="bg-sky-700 p-2 text-sm rounded-lg text-white">
                                8.0
                            </p>
                            <p className="text-gray-500">340 opini</p>
                        </div>
                    </div>
                    <div className="text-right p-4 px-8 text-xl font-extrabold">
                        <p>500$</p>
                    </div>
                </Link>
            </div>
        </section>
    );
};
export default Hero;
