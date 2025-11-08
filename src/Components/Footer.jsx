import React from 'react'
import Logo from '../assets/svg/Logo.svg?react'
import Facebook from '../assets/svg/Facebook.svg?react'
import X from '../assets/svg/X.svg?react'
import Instagram from '../assets/svg/Instagram.svg?react'


const Footer = () => {
    return (
        <div className='bg-black w-screen flex items-center justify-center flex-col py-[120px] gap-[89px]'>

            <div className=' flex items-center justify-center flex-col gap-[30px] min-w-[622px]'>
                <Logo className="w-[172px] h-[58px]" />
                <div className="flex gap-[45px] text-white text-[18px] ">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Subscription Plan</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <Facebook className="pointer w-[49px] h-[49px]" />
                    <X className="pointer w-[49px] h-[49px]" />
                    <Instagram className="pointer w-[49px] h-[49px]" />
                </div>
            </div>

            <div className=' flex justify-around pt-9  border border-t-[#838383] w-full   text-[18px]' >
                <p className='text-white' >Copyright@2024MiBiz Partner | All rights reversed</p>
                <div className="flex gap-5  text-white">
                    <a href="#">Privacy Policy </a>|<a href="#"> Terms </a> | <a href="#">Refund Poilcy</a>

                </div>
            </div>
        </div>
    )
}

export default Footer