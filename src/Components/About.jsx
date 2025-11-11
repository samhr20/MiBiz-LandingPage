import React from 'react'
import PlayStore from '../assets/svg/PlayStore.svg?react'
import AppStore from '../assets/svg/AppStore.svg?react'
import GetPro1 from '../assets/svg/GetPro1.svg?react'
import GetPro2 from '../assets/svg/GetPro2.svg?react'

const About = () => {
    return (
        <section className='bg-[#F6F4FF] w-screen py-[120px] text-black flex items-center justify-center '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between gap-[72px] h-[636px]'>
                    
                    <div className='flex flex-col gap-[45px] w-[702px]'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[52px] poppins-semibold text-nowrap'>About MyBiz</p>
                            <p className='text-[16px] text-[#4C4C4C] leading-[150%] tracking-normal text-start'>
                                <strong className='text-black'>“MyBiz Partner”</strong> is your all-in-one digital companion designed to simplify and streamline your 
                                <strong className='text-black'> Direct Selling </strong> business journey. <br /> Built for distributors, networkers, and direct sellers, 
                                the app empowers you to manage your prospects, monitor your orders, track your growth, and stay connected with your team — all from a single dashboard.
                            </p>
                        </div>

                        <div className="flex gap-[15px]">
                            <PlayStore className="w-52 h-[62px]" />
                            <AppStore className="w-52 h-[62px]" />
                        </div>
                    </div>

                    <div className='relative h-full w-[666px] flex flex-col justify-center'>
                        <img
                            src="/WelcomeBack.png"
                            alt=""
                            width={298}
                            height={623}
                            className='absolute left-10'
                        />
                        <img
                            src="/GetPro.png"
                            alt=""
                            width={263}
                            height={550}
                            className='absolute right-14'
                        />

                        <div className='w-[666px] h-[330px] rounded-[23px] bg-[#5A2A82]'></div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
