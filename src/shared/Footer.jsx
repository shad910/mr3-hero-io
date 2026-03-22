import React from "react";
import { Link, NavLink } from "react-router";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const footerLinks =
        <>
            <li>
                <NavLink to="/" >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/apps" >
                    Apps
                </NavLink>
            </li>
            <li>
                <NavLink to="/installation">
                    Installation
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact">
                    Contact Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/terms">
                    Terms & Conditions
                </NavLink>
            </li>
        </>

    return (
        <footer className="bg-[#001931] text-white">
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

                    {/* Left Side */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-0.5">
                            <img src="/src/assets/logo.png" alt="Logo" className="w-7 h-7 rounded-md" />
                            <span className="font-bold text-xl text-white">
                                HERO.IO
                            </span>
                        </Link>
                    </div>

                    {/* Center Section */}
                    <ul id="footer-links" className="menu menu-horizontal justify-center gap-2.5 text-sm">
                        {footerLinks}
                    </ul>

                    {/* Right Side */}
                    <div className="">
                        <p className="mb-2 text-sm text-center md:text-left">Social Links</p>
                        <div className="flex justify-center md:justify-end gap-3">
                            <a href="https://x.com/shadshs91"
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                                <FaXTwitter size={14} />
                            </a>
                            <a href="https://www.linkedin.com/in/md-sahadot-hossen-shad-838251345/"
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                                <FaLinkedinIn size={14} />
                            </a>
                            <a href="https://www.facebook.com/shadshs91"
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                                <FaFacebookF size={14} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-6"></div>

                {/* Bottom Side */}
                <p className="text-center text-sm text-white/70">
                    Copyright &copy; 2025 - All right reserved
                </p>

            </div>
        </footer>
    );
};

export default Footer;