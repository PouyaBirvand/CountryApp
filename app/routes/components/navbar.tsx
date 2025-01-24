import { Link } from "react-router";
import { useLocation } from "react-router";

type Tpath = string
export default function NavBar() {
    const location = useLocation();

    const isActive = (path:Tpath) => {
        return location.pathname === path;
    };

    return (
        <nav className='bg-gradient-to-r from-black/90 via-zinc-900/80 to-black/90 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20 hover:shadow-2xl duration-500 p-4'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <Link to="/" className='text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text hover:scale-105 transition-transform'>
                    WorldExplorer
                </Link>

                <div className='flex gap-8 items-center'>
                    <Link
                        to="/countries"
                        className={`nav-link ${isActive('/countries') ? 'text-white scale-105' : 'text-gray-300'} hover:text-white transition-all hover:scale-105`}
                    >
                        Countries
                    </Link>

                    <Link
                        to="/about"
                        className={`nav-link ${isActive('/about') ? 'text-white scale-105' : 'text-gray-300'} hover:text-white transition-all hover:scale-105`}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}