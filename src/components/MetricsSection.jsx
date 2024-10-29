import React from "react";

const metrics = [
    { value: "75%", description: "Candidate match rate" },
    { value: "4,000+", description: "Successful placement" },
    { value: "50+", description: "Operating countries" },
];

export default function MetricsSection() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        METRICS
                    </span>
                </span>
                <h2 className="mt-2 section-head !text-4xl">
                    Numbers speaking for themselves
                </h2>
            </div>
            <dl className="mt-10 flex justify-center gap-8">
                {metrics.map((metric, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && (
                            <div
                                className="hidden sm:block h-32 w-px bg-gray-300"
                                aria-hidden="true"
                            />
                        )}
                        <div className="flex flex-col text-center">
                            <dt className="text-8xl font-normal text-indigo-600 font-beVietnam">
                                {metric.value}
                            </dt>
                            <dd className="mt-2 section-para">
                                {metric.description}
                            </dd>
                        </div>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
}
