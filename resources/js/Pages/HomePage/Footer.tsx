import { FC } from "react";
import { PageProps } from '@/types'
import { Link } from '@inertiajs/react';
const Footer: FC<PageProps> = ({ auth }) => {
    return (
        <footer className="bg-sky-700 flex justify-around p-4 py-8">
            <div>
                <p className="text-lg text-white font-bold uppercase">bookingapp</p>
                <p>+48 456 345 222</p>
                <p>Poland</p>
            </div>
            <div className="flex flex-col items-start gap-2">
                <p className="text-white font-bold capitalize">User</p>
                {auth.user ? (
            <Link
                href={route('dashboard')}
                className=""
            >
                Dashboard
            </Link>
        ) : (
            <>
                <Link
                    href={route('login')}
                    className="font-bold"
                >
                    Log in
                </Link>
                <Link
                    href={route('register')}
                    className="font-bold"
                >
                    Register
                </Link>
            </>
        )}
            </div>
            <div>
                <p className="text-white font-bold capitalize">address</p>
                <p>example address 45b</p>
                <p>Warsaw</p>
            </div>
        </footer>
    );
};
export default Footer;
