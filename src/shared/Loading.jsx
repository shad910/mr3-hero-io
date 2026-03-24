import React from 'react';
import logo from '../assets/logo.png'; 

const Loading = () => {
    return (
        <div className="flex justify-center items-center my-20">
            <div className="w-32 h-32">
                <img
                    src={logo}
                    alt="Loading..."
                    className="w-full h-full object-contain opacity-20 animate-[spin_2s_linear_infinite]"
                />
            </div>
        </div>
    );
};

export default Loading;