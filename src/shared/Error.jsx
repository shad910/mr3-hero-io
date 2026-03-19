import React from "react";
import { Link } from "react-router";
import error from "../assets/error-404.png";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 my-5">
            <div className="w-full max-w-4xl p-6 rounded-xl text-center">

                {/* Image */}
                <div className="flex justify-center items-center mb-6">
                    <img
                        src={error}
                        alt="Error-404"
                        className="max-w-xs md:max-w-sm lg:max-w-md"
                    />
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-base-content">
                    Oops, page not found!
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 mt-2 mb-6">
                    The page you are looking for is not available.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="btn text-white border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90">
                        Go Back!
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;