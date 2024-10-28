import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function LastingImpression() {
    return (
        <div className="bg-gradient-to-r from-indigo-500 my-32 to-blue-500 text-white rounded-lg px-10 py-20 max-w-7xl mx-auto flex items-center justify-between">
            <div className="space-y-4 max-w-lg">
                <h2 className="text-4xl font-bold leading-tight">
                    Make a lasting impression with Hirevision
                </h2>
                <p className="text-lg text-white/90">
                    Discover why hiring managers prefer Hirevision over the
                    competition and what makes it the easiest, most powerful
                    video interviewing platform on the market.
                </p>
            </div>
            <button className="inline-flex items-center bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Duplicate in Framer <FiArrowUpRight className="ml-2" />
            </button>
        </div>
    );
}
