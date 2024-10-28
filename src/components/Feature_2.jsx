import React from "react";

const RealTimeApplicantAnalytics = () => {
    return (
        <div className="flex items-center justify-between p-8 bg-white py-20 max-w-7xl mx-auto">
            <div className="relative w-1/2">
                <img src="../../src/assets/feature_2.png" alt="" />
            </div>
            <div className="w-1/2 pl-8">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                    FEATURE
                </div>
                <h1 className="text-5xl font-bold text-navy-900 mb-4">
                    Real-Time Applicant Analytics
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
        </div>
    );
};

export default RealTimeApplicantAnalytics;
