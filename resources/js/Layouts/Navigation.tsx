import { Link } from '@inertiajs/react';
import { FC } from 'react';
import { PageProps } from '@/types'
const Navigation: FC<PageProps> = ({ auth }) => {
return (
    <nav className="flex flex-1 justify-between">
    <p className='uppercase font-bold text-white text-xl'>BookingApp</p>
    <div className='text-white'>
        {auth.user ? (
            <Link
                href={route('dashboard')}
                className="px-4"
            >
                Dashboard
            </Link>
        ) : (
            <>
                <Link
                    href={route('login')}
                    className="px-4 text-lg"
                >
                    Log in
                </Link>
                <Link
                    href={route('register')}
                    className="text-lg"
                >
                    Register
                </Link>
            </>
        )}
    </div>
</nav>
)
}

export default Navigation;