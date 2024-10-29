import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const testimonials = [
    {
        quote: "As a fast-growing startup, we needed an efficient way to find skilled professionals from various regions. This AI tool exceeded our expectations.",
        name: "Sarah Johnson, CEO of XYZ Innovations.",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
        quote: "This tool streamlined our recruitment process and allowed us to focus on what truly matters—growing our business.",
        name: "Michael Lee, Head of Operations at ABC Ltd.",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
        quote: "An essential part of our growth strategy. The team loves it, and so do I!",
        name: "Linda Carter, Co-founder of StartUp Labs.",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
        quote: "Finding top talent has never been easier. The AI recommendations are spot on.",
        name: "David Kim, CTO at Innovate Tech.",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
];

function TestimonialCard({ quote, name, image }) {
    return (
        <div className="w-96 h-72 flex flex-col justify-between p-8 bg-[#FFF9B9] rounded-lg shadow-lg mb-8 overflow-hidden">
            <p className="text-xl font-bold text-[#1949C9] leading-snug mb-4 line-clamp-5">
                “{quote}”
            </p>
            <div className="flex items-center mt-auto">
                <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 rounded-full"
                />
                <div className="ml-4">
                    <p className="text-sm font-medium text-[#1949C9]">{name}</p>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        gsap.to(section.children, {
            xPercent: -30 * (testimonials.length - 1), // Reduced movement to keep cards in view longer
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: () => `+=${section.scrollHeight}`, // Dynamically calculates end point based on scrollable height
                scrub: true,
                pin: true,
                snap: 1 / (testimonials.length - 1),
            },
        });
    }, []);

    return (
        <section className="overflow-hidden bg-gray-100 py-16">
            <div ref={sectionRef} className="flex space-x-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        image={testimonial.image}
                    />
                ))}
            </div>
        </section>
    );
}
