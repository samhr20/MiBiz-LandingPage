import React from "react";
import Video from '../assets/svg/Video.svg?react'
import { motion } from "motion/react";

const VideoSection = () => {
    return (
        <section className="  bg-[#F9F9F9] flex justify-center items-center py-[120px] ">


            <motion.div
                className='flex items-center justify-center w-screen gap-8 flex-col'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >

                <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='text-[48px] poppins-semibold text-center'>
                    Track leads, manage users,<span className='text-[#5A2A82]'> analyze <br /> business - all in one app</span>
                </motion.p>

                {/* Video will be here instead of svg*/}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <Video />
                </motion.div>

            </motion.div>
        </section >
    );
};

export default VideoSection;
