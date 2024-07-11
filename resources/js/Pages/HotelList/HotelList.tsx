import { FC } from "react";
import { PageProps } from "@/types";
import Navigation from "@/Layouts/Navigation";
const HotelList: FC<PageProps> = ({ auth }) => {
    return (
        <>
            <div className="p-8 px-2 lg:px-60 bg-sky-700 w-full">
                <Navigation auth={auth} />
            </div>
            <div className="w-full lg:px-60 py-8 px-2"> 
                <div className="flex lg:flex-row flex-col lg:justify-evenly lg:items-center shadow-md bg-sky-800 lg:h-32 p-4 lg:p-0 gap-4 lg:gap-0 text-white font-bold rounded">
                    <img src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_640.jpg" className="lg:w-36 object-cover rounded"/>
                    <div>
                        <p className="text-xl text-center">Nazwa hotelu</p>
                        <p className="text-center">gwiazdki</p>
                    </div>
                    <div>
                        <p className="text-lg">Miasto</p>
                        <p className="font-light">państwo</p>
                    </div>
                    <div>
                        <p className="text-lg">Ocena</p>
                        <p className="font-light">340<span className="pl-2">Opini</span></p>
                    </div>
                    <div>
                        <p className="text-lg">Price</p>
                        <p className="text-2xl py-2">4000$</p>
                    </div>
                    <button className="bg-slate-100 text-black px-8 py-2 rounded font-bold cursor-pointer hover:bg-slate-400 transition-all">Book</button>
                </div>
            </div>
        </>
    );
};
export default HotelList;
