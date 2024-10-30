import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const testimonials = [
    {
        quote: "We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements.",
        name: "John Smith, HR Manager at ABC Tech Solutions.",
        image: "testimonial_1.png", // Replace with actual image URL
        bg: "bg-[#ece5ff]",
    },
    {
        quote: "As a fast-growing startup, we needed an efficient way to find skilled professionals from various regions. This AI tool exceeded our expectations.",
        name: "Sarah Johnson, CEO of XYZ Innovations.",
        image: "testimonial_2.png", // Replace with actual image URL
        bg: "bg-[#fbf7b8]",
    },
    {
        quote: "The platform emphasis on diversity and inclusion impressed me, helping us create a more inclusive workforce.",
        name: "Michael Chen, HR Director at Acme Enterprises.",
        image: "testimonial_1.png", // Replace with actual image URL
        bg: "bg-[#d9ffd8]",
    },
];

function TestimonialCard({ quote, name, image, bg }) {
    return (
        <div
            className={`!w-[700px] h-[500px] flex flex-col justify-between p-8 rounded-3xl ${bg} shadow-lg mb-8 overflow-hidden`}
        >
            <p className="section-head !text-4xl mb-6 py-4">“{quote}”</p>
            <div className="flex items-center mt-auto">
                <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 rounded-full"
                />
                <div className="ml-4">
                    <p className="section-head !text-sm">{name}</p>
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
                        bg={testimonial.bg}
                    />
                ))}
            </div>
        </section>
    );
}
