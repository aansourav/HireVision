import React from "react";

const BlogPost = ({ image, category, title }) => (
    <div className="flex flex-col">
        <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-800 bg-green-100 rounded-full mb-2">
            {category}
        </span>
        <h3 className="text-xl font-bold text-indigo-900 leading-tight">
            {title}
        </h3>
    </div>
);

export default function BlogSection() {
    const blogPosts = [
        {
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OX2od3l9BO5wFEk1PZzWle8lDnx9PB.png",
            category: "ARTICLES",
            title: "What is CAC and how do I calculate it?",
        },
        {
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OX2od3l9BO5wFEk1PZzWle8lDnx9PB.png",
            category: "CASE STUDIES",
            title: "How you can use recurring revenue financing for faster growth without dilution",
        },
        {
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OX2od3l9BO5wFEk1PZzWle8lDnx9PB.png",
            category: "FUNDING",
            title: "Announcing Slang.ai's $20M in funding",
        },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wide">
                        BLOG
                    </span>
                    <h2 className="mt-1 text-4xl font-extrabold text-indigo-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        From our Blog
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        More articles
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
