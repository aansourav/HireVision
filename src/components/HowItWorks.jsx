import React from "react";

const HowItWorks = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2
                    className="text-sm font-semibold tracking-wide uppercase mb-2"
                    style={{
                        background:
                            "linear-gradient(to right, #90a4fd, #9c62ea)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    HOW IT WORKS
                </h2>
                <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4 leading-tight">
                    Easy implementation in
                    <br />
                    three easy steps
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Cutting-edge, user-friendly AI tool and growth analytics
                    designed to boost user conversion, engagement, and
                    retention.
                </p>
            </div>
        </div>
    );
};

export default HowItWorks;
