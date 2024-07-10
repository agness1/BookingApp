import { FC } from "react";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
const HomePage: FC<PageProps> = ({ auth }) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <Header auth={auth} />
                    <div className="w-full lg:px-60">
                        <main className="mt-6">
                            <Hero />
                        </main>
                    </div>
                </div>
                <Footer auth={auth} />
            </div>
        </>
    );
};

export default HomePage;
