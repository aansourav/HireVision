import React, { useState } from "react";
import Button from "./Button";

const Feature_3 = () => {
    const [isHovered, setIsHovered] = useState(true);
    return (
        <div className="flex items-center justify-between p-8 bg-white max-w-7xl py-20 mx-auto">
            <div className="w-1/2 pr-8">
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        FEATURE
                    </span>
                </span>
                <h1 className="section-head mb-4">
                    Seamless Multilingual Support
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
            <div className="w-1/2 relative">
                <img src="/feature_3.png" alt="" />
            </div>
        </div>
    );
};

export default Feature_3;
