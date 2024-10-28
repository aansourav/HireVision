import React from "react";
import {
    FaBullseye,
    FaGlobe,
    FaChartLine,
    FaClipboardCheck,
    FaHandsHelping,
    FaPalette,
} from "react-icons/fa";

const features = [
    {
        icon: <FaBullseye size={32} className="text-white" />,
        title: "Find Your Perfect Fit",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaGlobe size={32} className="text-white" />,
        title: "Hire Globally with Ease",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaChartLine size={32} className="text-white" />,
        title: "Make Data-Driven Decisions",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaClipboardCheck size={32} className="text-white" />,
        title: "Simplify Your Hiring Process",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaHandsHelping size={32} className="text-white" />,
        title: "Tailored to Your Needs",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaPalette size={32} className="text-white" />,
        title: "Focus on the Best Fits",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
];

export default function IncludedCards() {
    return (
        <div className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center space-y-4">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
