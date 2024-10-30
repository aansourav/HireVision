import React, { useState } from "react";
import Button from "./Button";

const blogPosts = [
    {
        category: "ARTICLES",
        title: "What is CAC and how do I calculate it?",
        image: "/blog_1.png",
    },
    {
        category: "CASE STUDIES",
        title: "How you can use recurring revenue financing for faster growth without dilution",
        image: "/blog_2.png",
    },
    {
        category: "FUNDING",
        title: "Announcing Slang.ai's $20M in funding",
        image: "/blog_3.png",
    },
];

const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg overflow-hidden ${className} px-4`}>
        {children}
    </div>
);

const CardContent = ({ children, className }) => (
    <div className={`my-8 ${className}`}>{children}</div>
);


export default function BlogCards() {
    return (
        <div className="container mx-auto max-w-7xl py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <Card key={index}>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <CardContent>
                            <span className="inline-block px-4 py-1 text-sm font-bold bg-green-200 text-blue-800 rounded-full mb-2">
                                {post.category}
                            </span>
                            <h3 className="section-head !text-2xl mt-4">
                                {post.title}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
