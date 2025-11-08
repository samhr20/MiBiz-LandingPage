import React from "react";
import Video from '../assets/svg/Video.svg?react'

const VideoSection = () => {
    return (
        <section className="relative z-30 -mt-85 w-screen  bg-[#F9F9F9] flex justify-center items-center py-[120px] ">
            
            <div className='flex items-center justify-center gap-8 flex-col'>

                <p className='text-[48px] poppins-semibold text-center'>
                    Track leads, manage users,<span className='text-[#5A2A82]'> analyze <br /> business - all in one app</span>
                </p>
                  
                  {/* Video will be here instead of svg*/}

                  <Video/>

            </div>
        </section>
    );
};

export default VideoSection;
