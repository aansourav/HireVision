import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const container = containerRef.current;
        const logos = slider.querySelectorAll(".logo");
        const totalWidth = logos.length * (logos[0].offsetWidth + 40); // 40px for margin

        gsap.set(logos, { opacity: 0.1 });

        timelineRef.current = gsap.timeline({ repeat: -1 }).to(logos, {
            x: `-=${totalWidth}`,
            duration: 20,
            ease: "none",
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
            },
        });

        logos.forEach((logo) => {
            gsap.to(logo, {
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: logo,
                    start: "left right",
                    end: "right left",
                    scroller: container,
                    scrub: true,
                },
            });
        });

        return () => {
            if (timelineRef.current) timelineRef.current.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const handleMouseEnter = () => {
        if (timelineRef.current) timelineRef.current.timeScale(0.5);
    };

    const handleMouseLeave = () => {
        if (timelineRef.current) timelineRef.current.timeScale(1);
    };

    return (
        <div className="py-24">
            <h2 className="text-3xl font-bold text-center mb-20 text-gray-800">
                Already chosen by the world leaders
            </h2>
            <div
                ref={containerRef}
                className="max-w-6xl mx-auto overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={sliderRef} className="flex space-x-10">
                    {[...Array(16)].map((_, index) => (
                        <div key={index} className="logo flex-shrink-0">
                            <img
                                src={`https://picsum.photos/200/100?random=${
                                    index % 8
                                }`}
                                alt={`Brand logo ${index + 1}`}
                                className="w-40 h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
