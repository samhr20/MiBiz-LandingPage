import React from 'react'
import Email from '../assets/svg/Email.svg?react'
import Chat from '../assets/svg/Chat.svg?react'
import Support from '../assets/svg/Support.svg?react'
import Button from './Button'

const Footer = () => {
    const data = [
        { icon: Email, Text: "Email Address", label: 'mibizpartner@gmail.com', btnText: "Email Us" },
        { icon: Chat, Text: "Chat", label: 'Chat with us now', btnText: "Chat Now" },
        { icon: Support, Text: "Support", label: 'We’re here to help', btnText: "Contact Us" }
    ]
    return (

        <section className='bg-black relative w-screen pt-[220px] pb-5 flex flex-col gap-[89px] '>

            <div className='absolute w-[1440px]  left-1/2 -translate-x-[50%] -top-15 rounded-[30px] bg-[#5A2A82] p-10 ' >
                <div className='flex items-center justify-between gap-[21px]'>
                    {data.map((item, index) => (
                        <div key={index} className='w-[440px] flex items-center justify-center py-6 px-[30px] gap-[30px]'>
                            <item.icon className="w-[58px] h-[58px] bg-white rounded-lg" />
                            <div >
                                <p className='text-[26px] poppins-medium text-white'>{item.Text}</p>
                                <p className='text-[16px] text-[#BDAACD]'>{item.label}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className=' flex items-center justify-center flex-col gap-[30px] min-w-[622px]'>
                <img src="/Logo.png"
                    width={219}
                    height={80}
                />
                <div className="flex gap-[45px] text-white text-[16px] ">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Subscription Plan</a>
                    <a href="#">Contact Us</a>
                </div>

            </div>

            <div className=' flex justify-around pt-9  border border-t-[#838383] w-full   text-[16px]' >
                <p className='text-gray-300' >Copyright@2024MiBiz Partner | All rights reversed</p>
                <div className="flex gap-5  text-gray-300">
                    <a href="#">Privacy Policy </a>|<a href="#"> Terms </a> | <a href="#">Refund Poilcy</a>

                </div>
            </div>
        </section>

    )
}

export default Footer