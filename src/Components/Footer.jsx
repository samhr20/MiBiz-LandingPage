import React from 'react'
import Email from '../assets/svg/Email.svg?react'
import Chat from '../assets/svg/Chat.svg?react'
import Support from '../assets/svg/Support.svg?react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Footer = ({ ref ,  ScrollHandler, HomeRef, AboutRef, FeatureRef, SubscriptionRef }) => {
    const data = [
        { icon: Email, Text: "Email Address", label: 'mibizpartner@gmail.com' },
        { icon: Chat, Text: "Chat", label: '+91 8901111444' },
        { icon: Support, Text: "Support", label: 'support@uplinorrplus.com' }
    ]
    return (

        <section ref={ref} className='bg-black relative w-screen pt-[220px] pb-5 flex flex-col gap-[89px] '>

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
                <img src="/LogoFooter.png"
                    width={232}
                    height={74}
                />
                <div className="flex gap-[45px] text-white text-[16px] ">
                    <span
                        className='pointer'
                        onClick={() => ScrollHandler(HomeRef)}
                    >Home</span>
                    <span
                        className='pointer'
                        onClick={() => ScrollHandler(AboutRef)}
                    >About</span>
                    <span
                        className='pointer'
                        onClick={() => ScrollHandler(FeatureRef)}
                    >Features</span>
                    <span
                        className='pointer'
                        onClick={() => ScrollHandler(SubscriptionRef)}
                    >Subscription Plan</span>
                    <span
                        className='pointer'
                        onClick={() => ScrollHandler(ContactUsRef)}
                    >
                        Contact Us
                    </span>
                </div>

            </div>

            <div className=' flex justify-around pt-9  border border-t-[#838383] w-full   text-[16px]' >
                <p className='text-gray-300' >Copyright@2025Uplinorr Plus | All rights reversed</p>
                <div className="flex gap-5  text-gray-300">
                    <Link to='/privacy-policy'>Privacy Policy</Link> | <Link to="/terms-conditions">Terms</Link>

                </div>
            </div>
        </section>

    )
}

export default Footer