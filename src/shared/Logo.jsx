import React from 'react';
import { Link } from "react-router";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-0.5">
            <img src="/src/assets/logo.png" alt="Logo" className="w-7 h-7 rounded-md" />
            <span className="font-bold text-lg text-primary">
                HERO.IO
            </span>
        </Link>
    );
};

export default Logo;