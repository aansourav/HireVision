import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Button from "./Button";
import HeroCards from "./HeroCards";
const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(true);
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Custom gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #FFE17D 0%, #FFE17D 5%, #9EFF9E 30%, #9EE7FF 50%, #B49EFF 75%, #E7E7FF 90%, #FFFFFF 100%)",
                }}
            ></div>

            {/* Content container */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                {/* New feature badge */}
                <div className="inline-flex items-center rounded-full bg-[#e3e2fb] bg-opacity-30 px-4 py-2 text-sm font-medium font-beVietnam text-[#5e44ff] backdrop-blur-xl mb-8">
                    <span className="mr-2 rounded-full bg-white px-3 py-1">
                        New
                    </span>
                    Create teams in Organisation
                    <IoMdArrowForward className="ml-1" size={15} />
                </div>

                {/* Main headline */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-[#02015a] font-poppins mb-6">
                    Boost your hiring process
                    <br />
                    with AI solution
                </h1>

                {/* Subheadline */}
                <p className="max-w-xl mx-auto text-lg sm:text-xl text-[#4e5774] font-beVietnam mb-8">
                    Hirevision is used by numerous businesses, institutions, and
                    recruiters to significantly enhance their screening and
                    recruitment procedures.
                </p>

                {/* Trust badges */}
                <div className="flex justify-center items-center mb-8">
                    <div className="flex -space-x-2 mr-4">
                        {[...Array(4)].map((_, i) => (
                            <img
                                key={i}
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src={`https://randomuser.me/api/portraits/men/${
                                    i + 1
                                }.jpg`}
                                alt=""
                            />
                        ))}
                    </div>
                    <span className="text-sm text-[#4e5774] font-beVietnam font-medium">
                        Trusted already by 1.2k+
                    </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 rounded-lg bg-transparent text-[#573cff] font-medium font-beVietnam text-md hover:bg-opacity-90 transition duration-300 border border-white hover:bg-[#573cff] hover:text-white hover:border-none ">
                        Learn more
                    </button>
                    <Button
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        text="Request Demo"
                    />
                </div>
            </div>

            {/* Made in Framer badge */}
            <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-800 flex items-center">
                <svg
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                    <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Made in Framer
            </div>
        </div>
    );
};

export default HeroSection;
