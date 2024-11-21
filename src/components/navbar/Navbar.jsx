
import { useContext } from "react";
import userIcon from '../../assets/user.png';

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <header className="bg-gray-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-6">
                    <h1 className=" text-3xl md:text-4xl text-blue-900 font-bold">Vocab</h1>
                    <nav className="hidden md:flex space-x-4">
                        <NavLink className="font-semibold text-blue-900" to="/">Home</NavLink>
                        <NavLink className="font-semibold text-blue-900" to="/startlearning">Start Learning</NavLink>
                        <NavLink className="font-semibold text-blue-900" to="/tutorials">Tutorials</NavLink>
                        <NavLink className="font-semibold text-blue-900" to="/aboutus">About Us</NavLink>
                        {user && user?.email && (
                            <NavLink className="font-semibold" to="/myprofile">My Profile</NavLink>
                        )}
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block text-blue-900 text-2xl font-bold">
                        {user && <p>Welcome, {user?.displayName}</p>}
                    </div>
                    <div>
                        {user && user?.email ? (
                            <img
                                className="w-8 md:w-10 rounded-full"
                                src={user?.photoURL}
                                alt="User"
                            />
                        ) : (
                            <img className="w-8 md:w-10" src={userIcon} alt="Default User" />
                        )}
                    </div>
                    {user && user?.email ? (
                        <Link
                            onClick={logOut}
                            className=" bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-teal-600  shadow-md"
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link className=" bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-teal-600  shadow-md" to="/login">
                            Login
                        </Link>
                    )}
                </div>
                <div className="block md:hidden">
                    <button
                        className="text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-label="Toggle Menu"
                        onClick={() => {
                            const mobileMenu = document.querySelector('.mobile-nav');
                            mobileMenu.classList.toggle('hidden');
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <nav className="mobile-nav hidden md:hidden flex flex-col space-y-2 text-center pb-3">
                <NavLink className="font-semibold" to="/">Home</NavLink>
                <NavLink className="font-semibold" to="/startlearning">Start Learning</NavLink>
                <NavLink className="font-semibold" to="/tutorials">Tutorials</NavLink>
                <NavLink className="font-semibold" to="/aboutus">About Us</NavLink>
                {user && user?.email && (
                    <NavLink className="font-semibold" to="/myprofile">My Profile</NavLink>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
