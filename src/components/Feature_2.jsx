import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";

const RealTimeApplicantAnalytics = () => {
    const [isHovered, setIsHovered] = useState(false);

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="flex items-center justify-between p-8 bg-white py-20 max-w-7xl mx-auto">
            <motion.div
                className="relative w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={imageVariants}
            >
                <img src="/feature_2.png" alt="Feature illustration" />
            </motion.div>
            <motion.div
                className="w-1/2 pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={textVariants}
            >
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        FEATURE
                    </span>
                </span>

                <h1 className="section-head mb-4">
                    Real-Time Applicant Analytics
                </h1>
                <p className="section-para mb-6">
                    Let AI analyze and rank applicants based on qualifications,
                    experience, and skills, ensuring you focus on the most
                    promising candidates first.
                </p>
                <Button
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    text="Request Demo"
                />
            </motion.div>
        </div>
    );
};

export default RealTimeApplicantAnalytics;
