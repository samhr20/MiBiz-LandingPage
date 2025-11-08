import React from 'react'
import PlayStore from '../assets/svg/PlayStore.svg?react'
import AppStore from '../assets/svg/AppStore.svg?react'
import GetPro1 from '../assets/svg/GetPro1.svg?react'
import GetPro2 from '../assets/svg/GetPro2.svg?react'

const About = () => {
    return (
        <section className='bg-white w-screen py-[120px] text-black flex items-center justify-center '>
            <div className='flex items-center justify-between'>
                <div className={`flex items-center justify-between gap-[72px]  h-[636px] `}>
                    <div className='flex flex-col gap-[45px]    w-[702px]'>
                        <div className='flex flex-col gap-4'>
                            <p className=' text-[48px] poppins-semibold text-nowrap'>About Application</p>
                            <p className='text-[18px] text-[#4C4C4C] leading-[150%] tracking-normal text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div className="flex  gap-[15px]">
                            <PlayStore className="w-52 h-[62px]" />
                            <AppStore className="w-52 h-[62px]" />
                        </div>
                    </div>
                    <div className='relative  h-full w-[666px] flex flex-col  justify-center '>
                        <GetPro1 className="absolute left-7" />
                        <GetPro2 className="absolute right-7" />
                        <div className=' h-[330px] bg-[#5A2A82] rounded-[23px]'></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About