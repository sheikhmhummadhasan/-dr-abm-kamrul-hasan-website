import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#eef2ff]">

            {/* Spinner */}
            <div className="relative w-16 h-16">

                <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>

                <div className="absolute inset-0 rounded-full border-4 border-[#0463fa] border-t-transparent animate-spin"></div>

            </div>

        </div>
    )
};

export default loading;