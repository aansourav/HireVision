import React from "react";

const Feature_3 = () => {
    return (
        <div className="flex items-center justify-between p-8 bg-white max-w-7xl py-20 mx-auto">
            <div className="w-1/2 pr-8">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                    FEATURE
                </div>
                <h1 className="text-5xl font-bold text-navy-900 mb-4">
                    Seamless Multilingual Support
                </h1>
                <p className="text-gray-600 mb-6">
                    Let AI analyze and rank applicants based on qualifications,
                    experience, and skills, ensuring you focus on the most
                    promising candidates first.
                </p>
                <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full flex items-center">
                    Request demo
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-1/2 relative">
                <img src="/feature_3.png" alt="" />
            </div>
        </div>
    );
};

export default Feature_3;
