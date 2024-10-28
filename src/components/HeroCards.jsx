import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ children, className }) => (
    <div className={`rounded-3xl overflow-hidden ${className}`}>{children}</div>
);

const HeroCards = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const cards = cardsRef.current;

        gsap.to(cards, {
            x: "-30%",
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        cards.forEach((card) => {
            gsap.to(card, {
                x: "-5%",
                ease: "power1.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });
    }, []);

    const cardData = [
        {
            type: "person",
            name: "Amar",
            role: "Developer",
            image: "/placeholder.svg?height=300&width=300",
            bgColor: "bg-yellow-100",
        },
        {
            type: "stat",
            number: "456",
            label: "Positions",
            bgColor: "bg-blue-100",
        },
        {
            type: "quote",
            text: "Delivering relevant projects on time, fortifying our team in the process.",
            author: "Alina Jovosich",
            role: "Talent acquisition @ Toptal",
            bgColor: "bg-white",
        },
        {
            type: "person",
            name: "Ingrid",
            role: "Marketing",
            image: "/placeholder.svg?height=300&width=300",
            bgColor: "bg-gray-200",
        },
        {
            type: "stat",
            number: "7k+",
            label: "Members",
            bgColor: "bg-green-100",
        },
        {
            type: "person",
            name: "Oliver",
            role: "Designer",
            image: "/placeholder.svg?height=300&width=300",
            bgColor: "bg-white",
        },
    ];

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div ref={containerRef} className="max-w-7xl mx-auto">
                <div className="flex space-x-6 overflow-x-hidden">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`flex-shrink-0 ${
                                index === 2 ? "w-96" : "w-64"
                            }`}
                        >
                            <Card className={`h-80 ${card.bgColor}`}>
                                {card.type === "person" && (
                                    <div className="relative h-full">
                                        <img
                                            src={card.image}
                                            alt={card.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-md">
                                            <p className="font-semibold">
                                                {card.name}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {card.role}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {card.type === "stat" && (
                                    <div className="flex flex-col justify-center items-center h-full">
                                        <p className="text-gray-600 text-lg mb-2">
                                            {card.label}
                                        </p>
                                        <p className="text-5xl font-bold text-indigo-700">
                                            {card.number}
                                        </p>
                                    </div>
                                )}
                                {card.type === "quote" && (
                                    <div className="p-6 flex flex-col justify-between h-full">
                                        <p className="text-2xl font-semibold text-indigo-900 mb-4">
                                            {card.text}
                                        </p>
                                        <div className="flex items-center">
                                            <img
                                                src="/placeholder.svg?height=40&width=40"
                                                alt={card.author}
                                                className="w-10 h-10 rounded-full mr-4"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm">
                                                    {card.author}
                                                </p>
                                                <p className="text-gray-600 text-xs">
                                                    {card.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCards;
