import React, { forwardRef } from "react";
import { motion } from "motion/react";
import PlayStore from "../assets/svg/PlayStore.svg?react";
import AppStore from "../assets/svg/AppStore.svg?react";

const HeroSection = ({ref}) => {
    return (
        <section ref={ref}
            className="relative bg-cover h-screen bg-no-repeat flex z-20 overflow-hidden"
            style={{
                backgroundImage: "url('/HeroImage.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0F001BA6]"></div>


            {/* Phone image */}
            <motion.div
                initial={{ opacity: 0, y: 150, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    delay: 1,
                    duration: 1.2,
                    type: "spring",
                    stiffness: 70,
                }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-50 z-30 w-full flex justify-center items-end pointer-events-none">
                <div className="relative flex justify-center items-end w-full max-w-[900px] sm:max-w-[700px] md:max-w-[800px]">
                    {/* Left phone */}
                    <img
                        src="/GetPro.png"
                        alt=""
                        className="absolute left-[40px] bottom-0 z-20 w-[230px] sm:w-[180px] md:w-[210px] lg:w-[230px] xl:w-[250px]"
                    />
                    {/* Center phone */}
                    <img
                        src="/Insight.png"
                        alt=""
                        className="relative z-30 w-[260px] sm:w-[200px] md:w-[230px] lg:w-[260px] xl:w-[280px] "
                    />
                    {/* Right phone */}
                    <img
                        src="/Prospect.png"
                        alt=""
                        className="absolute right-[40px] bottom-0 z-20 w-[230px] sm:w-[180px] md:w-[210px] lg:w-[230px] xl:w-[250px]"
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="absolute z-40 w-full text-white top-[26%] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-3 "
                >
                    {/* Heading */}
                    <motion.h2
                        className="text-[64px] poppins-semibold tracking-[0%]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Your Smart MLM Business Partner
                    </motion.h2>

                    <motion.p
                        className="tracking-[0%] text-[16px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        Empowering your growth with intelligent tools to build, manage, and scale your MLM business effortlessly.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
