import React from 'react'
import SmartLeadGen from '../assets/svg/SmartLeadGen.svg?react'
import RepurchaseTracker from '../assets/svg/RepurchaseTracker.svg?react'
import ProductInventory from '../assets/svg/ProductInventory.svg?react'
import Analytics from '../assets/svg/Analytics.svg?react'
import TeamPerformance from '../assets/svg/TeamPerformance.svg?react'
import { motion } from 'motion/react'

const Features = ({ref}) => {

    const data = [
        {
            title: "Smart Business Dashboard",
            description: `Get a complete 360° view of your business performance through a clean, visual dashboard. Instantly track your total leads, active prospects, sales conversions, income progress, and repurchase analytics — all in one place. <br/> The dashboard automatically updates in real-time, helping you stay on top of every goal and monitor your team’s activities without switching between multiple tools. It’s your command center for building a stronger business network.`,
            image: "/InsightFeatures.png"
        },
        {
            title: "Prospect Management",
            description: `Say goodbye to messy spreadsheets and missed opportunities. Manage every prospect efficiently — from first contact to conversion.<br/> With built-in follow-up reminders, activity notes, and engagement history, you’ll never forget a potential customer again.<br/> The system intelligently prioritizes your leads, helping you focus on people who are more likely to join or repurchase, ensuring maximum growth for your business.`,
            image: "/ProspectFeatures.png"
        },
        {
            title: "Repurchase Tracker",
            description: `Easily track customer purchases, repurchases, and product usage with automated insights.<br/> Monitor which products perform best, understand your customers’ buying behavior, and receive alerts when repurchase cycles are due.<br/> This feature helps you maintain consistent sales flow and customer satisfaction, making your business operations more predictable and scalable.`,
            image: "/RepurchaseTracker.png"
        },
        {
            title: "Real-time Notifications & Updates",
            description:  `Stay informed with instant notifications about every important business event — from new orders and payments to reminders, offers, and team achievements.<br/> Receive both individual and global announcements directly in the app without needing any external communication tools.<br/> Whether you’re managing your business solo or leading a team, Uplinorr Plus ensures you never miss a single update that matters.`,
            image: "/RealTimeUpdates.png"
        }
    ]

    return (
        <section ref={ref} className='bg-[#F6F4FF] py-[120px] px-60 flex flex-col items-center relative'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className='bg-white rounded-[40px] z-30 py-[100px] flex gap-[60px] flex-col items-center w-[1440px]'
            >
                <motion.p
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='text-[52px] poppins-semibold text-center'
                >
                    Our Core <span className='text-[#5A2A82]'> Features </span>
                </motion.p>

                <div className='flex flex-col gap-[100px] min-w-[1174px]'>
                    {data.map((item, index) => {
                        const isReversed = index % 2 !== 0
                        return (
                            <div
                                key={index}
                                className={`flex items-center justify-between w-full ${isReversed ? 'flex-row-reverse' : ''}`}
                            >
                                {/* Image Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className='border-[0.88px] border-[#FFFFFF4D] self-center'
                                >
                                    <img src={item.image} alt={item.image} />
                                </motion.div>

                                {/* Text Section */}
                                <motion.div
                                  

                                       initial={{ opacity: 0, x: isReversed ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className='flex flex-col gap-4 w-[544px]'
                                >
                                    <p className='text-[#5A2A82] text-[40px] poppins-semibold '>
                                        {item.title}
                                    </p>
                                    <p
                                        className='text-[16px] text-[#333333] leading-[150%] tracking-normal text-start'
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <div   className='absolute -bottom-25 z-0 w-screen flex items-center'>

              <img src="/Union.png" 
         alt="" />

              <img src="/Union.png" 
         alt="" />

              <img src="/Union.png" 
         alt="" />

              <img src="/Union.png" 
         alt="" />
          </div>
        </section>
    )
}

export default Features
