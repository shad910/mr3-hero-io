import React from "react";
import { FaGithub, FaBars } from "react-icons/fa";

import Logo from "./Logo";
import { NavLink } from "react-router";

const Navbar = () => {

    const navLinks = <>

        <li>
            <NavLink to="/" className="border-b border-transparent">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/apps" className="border-b border-transparent">
                Apps
            </NavLink>
        </li>
        <li>
            <NavLink to="/installation" className="border-b border-transparent">
                Installation
            </NavLink>
        </li>
    </>

    return (
        <nav className="bg-base-100">
            <div className="navbar max-w-7xl mx-auto px-4">

                {/* Left - Logo */}
                <section className="navbar-start">
                    <Logo />
                </section>

                {/* Center - Desktop Menu */}
                <section className="navbar-center hidden md:flex">
                    <ul id="nav-links" className="menu menu-horizontal px-1 gap-3 text-sm font-medium rounded-none">
                        {navLinks}
                    </ul>
                </section>

                {/* Right - Button + Hamburger */}
                <section className="navbar-end flex items-center gap-2">

                    {/* Contribute Button (hidden on small screens) */}
                    <a
                        href="#"
                        className="hidden sm:flex btn btn-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none items-center gap-2"
                    >
                        <FaGithub />
                        Contribute
                    </a>

                    {/* Hamburger Menu (right side on mobile) */}
                    <div className="dropdown dropdown-end md:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <FaBars size={18} />
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks}

                            {/* Mobile Contribute Button */}
                            <li className="mt-2">
                                <a className="btn btn-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none flex items-center gap-2">
                                    <FaGithub />
                                    Contribute
                                </a>
                            </li>
                        </ul>
                    </div>

                </section>
            </div>
        </nav>
    );
};

export default Navbar;