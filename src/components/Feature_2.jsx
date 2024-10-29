import React, { useState } from "react";
import Button from "./Button";

const RealTimeApplicantAnalytics = () => {
    const [isHovered, setIsHovered] = useState(true);
    return (
        <div className="flex items-center justify-between p-8 bg-white py-20 max-w-7xl mx-auto">
            <div className="relative w-1/2">
                <img src="/feature_2.png" alt="" />
            </div>
            <div className="w-1/2 pl-8">
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        FEATURE
                    </span>
                </span>

                <h1 className="section-head mb-4">
                    Real-Time Applicant Analytics
                </h1>
                <p className="section-para mb-6">
                    Let AI analyze and rank applicants based on qualifications,
                    experience, and skills, ensuring you focus on the most
                    promising candidates first.
                </p>
                <Button
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    text="Request Demo"
                />
            </div>
        </div>
    );
};

export default RealTimeApplicantAnalytics;
