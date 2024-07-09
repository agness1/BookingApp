import { Link } from "@inertiajs/react";
import { FC } from "react";
import Footer from "../HomePage/Footer";
import Navigation from "@/Layouts/Navigation";
import { PageProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HotelPage: FC<PageProps> = ({ auth }) => {
    return (
        <>
            <div className="p-8 px-2 lg:px-60 bg-sky-700 w-full">
                <Navigation auth={auth} />
            </div>
            <div className="w-full px-60 py-8">
                <div className="flex">
                    <div className="h-96 w-1/2 flex">
                        <img
                            src="https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_640.jpg"
                            alt=""
                            className="w-1/2 border-4 border-white object-cover"
                        />
                        <div className="w-1/2">
                            <img
                                src="https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_640.jpg"
                                alt=""
                                className="h-1/2 w-full border-4 border-white object-cover"
                            />
                            <img
                                src="https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_640.jpg"
                                alt=""
                                className="h-1/2 w-full border-t-2 border-4 border-white object-cover"
                            />
                        </div>
                    </div>
                    <div className="h-96  w-1/2 flex justify-center">
                        <div className="p-4 h-full flex flex-col  justify-evenly">
                            <p className="font-bold text-2xl"> Hotel name Hotel name </p>
                            <div className="flex gap-2">
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
                                <p className="bg-sky-700 p-2 rounded-lg text-white text-sm">
                                    8.0
                                </p>
                                <p className="text-gray-500">340 opini</p>
                            </div>
                            <div className="text-2xl font-extrabold">
                                <p>500$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <div className="h-96 w-1/2 flex flex-col items-center justify-center p-8 gap-4">
                        <p className="text-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Exercitationem assumenda expedita neque
                            maiores labore id quas quae vero deleniti
                            dignissimos quaerat perferendis, amet fuga incidunt
                            magni provident necessitatibus nobis praesentium.
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis a perspiciatis vitae ab tempore?
                            Quaerat labore placeat, exercitationem fuga eligendi
                            est sit libero laudantium, cum, corporis illum quia
                            ea numquam.
                        </p>
                    </div>
                    <div className="w-1/2 ">
                        <form className="h-full flex flex-col p-8 items-center justify-evenly gap-4">
                        <label className="text-xl text-zinc-800 font-medium">Adults</label>
                        <input className="w-9/12  rounded-md border-0 py-1.5 text-gray-900 text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" type="number" placeholder="1"></input>
                        <label className="text-xl font-medium text-zinc-800 ">Children</label>
                        <input className="w-9/12 rounded-md border-0 py-1.5 text-gray-900 text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" type="number" placeholder="1"></input>
                        <label className="text-xl font-medium text-zinc-800 ">When?</label>
                        <input className="w-9/12 rounded-md border-0 py-1.5 text-gray-900 text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" type="date"></input>
                        <input type="submit" value={"Book"} className="w-1/2 h-12 mt-4 bg-sky-700 text-white font-bold rounded-md hover:bg-sky-500 cursor-pointer"/>
                        </form>
                    </div>
                </div>
            </div>
            <Footer auth={auth} />
        </>
    );
};

export default HotelPage;
