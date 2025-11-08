import React from 'react'
import SmartLeadGen from '../assets/svg/SmartLeadGen.svg?react'
import RepurchaseTracker from '../assets/svg/RepurchaseTracker.svg?react'
import ProductInventory from '../assets/svg/ProductInventory.svg?react'
import Analytics from '../assets/svg/Analytics.svg?react'
import TeamPerformance from '../assets/svg/TeamPerformance.svg?react'

 const Features = () => {

    const data = [
        {
            title: "Smart Lead Management",
            description: "Easily manage and track all your leads in one place with our Smart Lead Management system. Get real-time insights, automate follow-ups, and never miss a potential prospect. The app intelligently organizes your contacts, ranks leads based on engagement, and helps you focus on the ones most likely to convert — making your MLM business faster, smarter, and more efficient.", image: SmartLeadGen
        },
        {
            title: "Repurchase Tracker",
            description: "Stay on top of your team’s product repurchases with our advanced Repurchase Tracker. Instantly monitor who’s buying, how often, and when the next repurchase is due. This feature helps you maintain consistent sales flow, identify active distributors, and plan better incentives — ensuring smooth growth and steady income in your MLM business.",
            image: RepurchaseTracker
        },
        {
            title: "Product Inventory",
            description: "Keep your stock organized and up to date with our easy-to-use Product Inventory feature. Track available products, manage low-stock alerts, and record every sale or purchase in real time. This ensures you always know what’s in stock, reduces manual errors, and helps you maintain a seamless supply chain for your MLM business.",
            image: ProductInventory
        },
        {
            title: "Analytics Dashboard",
            description: "Get a complete overview of your MLM business performance with our powerful Analytics Dashboard. Track sales, team growth, commissions, and repurchases — all in real time. Visual charts and detailed reports help you identify trends, measure progress, and make data-driven decisions to boost productivity and maximize profits.",
            image: Analytics
        },
        {
            title: "Team Performance Insights",
            description: "Monitor and motivate your network with our Team Performance Insights feature. View individual and team progress, track recruitment activity, sales achievements, and performance trends — all in one place. This helps you recognize top performers, identify areas for improvement, and create strategies to strengthen your entire MLM network.",
            image: TeamPerformance
        },
    ]

    return (
        <section className='w-screen bg-white py-[120px] px-60 flex flex-col items-center  '>
            <div className='flex flex-col items-center justify-between gap-8'>
                <p className='text-[48px] poppins-semibold text-center'>
                    Our Core <span className='text-[#5A2A82]'> Features </span>
                </p>

                <div className='bg-[#F9F9F9] rounded-3xl flex flex-col items-center justify-center min-w-[1440px]'>

                    <div className='flex flex-col gap-[100px] min-w-[1174px] my-[100px]'>
                        {data.map((item, index) => (
                            <div key={index} className={`flex items-center justify-between gap-4  h-[457px] ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                <div className='flex flex-col gap-4 w-[552px]'>
                                    <p className='text-[#5A2A82] text-[40px] poppins-semibold text-nowrap'>{item.title}</p>
                                    <p className='text-[18px] text-black leading-[150%] tracking-normal text-start'>{item.description}</p>
                                </div>
                                <div className='bg-[#EFEAF3] h-full border border-[#FFFFFF4D] rounded-[21.01px] w-[530px] flex items-end  justify-center'>
                                    <item.image />
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default  Features