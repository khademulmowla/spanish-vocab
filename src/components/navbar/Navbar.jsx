
import { useContext } from "react";
import userIcon from '../../assets/usIcon3.png';

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const links = <>
        <div className="space-x-4">
            <NavLink className="font-semibold text-lg text-blue-900" to="/">Home</NavLink>
            <NavLink className="font-semibold text-lg text-blue-900" to="/startlearning">Start Learning</NavLink>
            <NavLink className="font-semibold text-lg text-blue-900" to="/tutorials">Tutorials</NavLink>
            <NavLink className="font-semibold text-lg text-blue-900" to="/aboutus">About Us</NavLink>
            {user && user?.email && (
                <NavLink className="font-semibold text-lg text-blue-900" to="/myprofile">My Profile</NavLink>
            )}
        </div>
    </>
    return (
        <div className="navbar bg-teal-50 py-4 px-4">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content flex flex-col bg-base-100 rounded-box z-[1] mt-3 w-58 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <h1 className="text-4xl md:text-5xl text-blue-900 font-bold">Vocab</h1>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar-end space-x-4">
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
                        <img className="w-8 rounded-full md:w-10" src={userIcon} alt="Default User" />
                    )}
                </div>
                {user && user?.email ? (
                    <Link
                        onClick={logOut}
                        className="bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-teal-600 shadow-md"
                    >
                        Logout
                    </Link>
                ) : (
                    <Link className="bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-teal-600 shadow-md" to="/login">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
