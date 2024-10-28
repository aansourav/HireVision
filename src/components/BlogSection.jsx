import React from "react";

const articles = [
    {
        category: "ARTICLES",
        categoryColor: "bg-lime-200 text-lime-600",
        title: "What is CAC and how do I calculate it?",
        image: "https://via.placeholder.com/300", // Replace with actual image URLs
    },
    {
        category: "CASE STUDIES",
        categoryColor: "bg-lime-200 text-lime-600",
        title: "How you can use recurring revenue financing for faster growth without dilution",
        image: "https://via.placeholder.com/300", // Replace with actual image URLs
    },
    {
        category: "FUNDING",
        categoryColor: "bg-lime-200 text-lime-600",
        title: "Announcing Slang.ai’s $20M in funding",
        image: "https://via.placeholder.com/300", // Replace with actual image URLs
    },
];

export default function BlogSection() {
    return (
        <div className="bg-white py-12 text-center">
            <div className="flex justify-center mb-4">
                <span className="bg-indigo-100 text-indigo-500 text-sm font-semibold px-3 py-1 rounded-full">
                    BLOG
                </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                From our Blog
            </h2>
            <div className="flex justify-center space-x-6 mb-8">
                {articles.map((article, index) => (
                    <div key={index} className="max-w-xs text-left">
                        <div className="rounded-lg overflow-hidden mb-4">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <span
                            className={`${article.categoryColor} text-sm font-semibold px-2 py-1 rounded-md`}
                        >
                            {article.category}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 mt-2 leading-snug">
                            {article.title}
                        </h3>
                    </div>
                ))}
            </div>
            <button className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition">
                More articles <span className="ml-2 text-indigo-600">→</span>
            </button>
        </div>
    );
}
