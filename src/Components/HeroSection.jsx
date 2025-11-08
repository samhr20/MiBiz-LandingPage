import React from "react";
import PlayStore from '../assets/svg/PlayStore.svg?react'
import AppStore from '../assets/svg/AppStore.svg?react'
import HeroPhones from '../assets/svg/HeroPhones.svg?react'

const HeroSection = () => {
    return (
        <section
            className="relative w-screen  bg-cover bg-no-repeat flex  justify-center z-20"
            style={{
                backgroundImage: "url('/HeroImage.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0F001BA6]"></div>

            {/* Content */}
            <div className="relative z-20 text-white mt-[264px] ">

                <div className="flex items-center justify-center flex-col gap-10 ">
                    <div className="text-center ">
                        <h2 className="text-[64px]  poppins-semibold tracking-[0%]" >Your Smart MLM Business Partner</h2>
                        <p className=" tracking-[0%]">Empowering your growth with intelligent tools to build, manage, and scale your MLM business effortlessly.</p>
                    </div>
                    <div className="flex items-center justify-center gap-[15px]">
                        <PlayStore className="w-52 h-[62px]" />
                        <AppStore className="w-52 h-[62px]" />
                    </div>
                </div>


                <div className="flex items-center justify-center -mt-65 animate-float">
                    <HeroPhones className="h-[1200px]"/>
                </div>

            </div>

        </section>
    );
};

export default HeroSection;
