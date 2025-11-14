import React from 'react'
import PlansEnum from '../helpers/PlansEnum'
import Button from '../Components/Button'
import Bolt from '../assets/svg/Bolt.svg?react'
import Timer from '../assets/svg/Timer.svg?react'
import { motion } from 'motion/react'

const Plans = ({ SubPlans , ref}) => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.35, 
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const data = [
    {
      "timePeriod": "Monthly",
      "popular": false,
      "pricing": 99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l",
      "title1": "elit, sed do eiusmod t",
      "label1": "elit, sed do eiusmod tempor incididunt ut l",
      "title2": "elit, sed do eiusmod t",
      "label2": "elit, sed do eiusmod tempor incididunt ut l"
    },
    {
      "timePeriod": "Yearly",
      "popular": true,
      "pricing": 999,
      "description": "If you have a Growing business you can use Our Business Plan to Benefit with all of our Features.",
      "title1": "elit, sed do eiusmod t",
      "label1": "elit, sed do eiusmod tempor incididunt ut l",
      "title2": "elit, sed do eiusmod t",
      "label2": "elit, sed do eiusmod tempor incididunt ut l"
    }
  ]

    return (
        <section  ref={ref} className='w-screen bg-[#F6F4FF] rounded-3xl py-[120px] flex items-center justify-center'>
            <div className='flex flex-col items-center justify-between gap-8'>

                {/* Heading */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='poppins-semibold text-[52px]'
                >
                    Subscription Plans
                </motion.p>

                {/* Cards container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex items-center justify-between gap-6 flex-wrap'
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`${item[PlansEnum.popular] ? 'bg-[#F5F2F7]' : 'bg-white'} w-[517px] rounded-[22px] p-[50px] flex flex-col justify-between gap-[31px]`}
                        >
                            {/* Top section */}
                            <div className='relative flex flex-col gap-3.5'>
                                <p className='text-[16px] text-[#333333]'>{item[PlansEnum.timePeriod]}</p>
                                <p className={`poppins-semibold text-[60px] ${item[PlansEnum.popular] ? 'text-[#5A2A82]' : 'text-[#4C4C4C]'}`}>
                                    ₹{item[PlansEnum.pricing]}
                                </p>
                                <p className={`${item[PlansEnum.popular] ? 'text-[#4C4C4C]' : 'text-[#808080]'}`}>
                                    {item[PlansEnum.description]}
                                </p>

                                {item[PlansEnum.popular] && (
                                    <span className='absolute top-0 right-0 bg-[#5A2A82] text-white poppins-medium text-[16px] rounded-[36px] py-1 px-4'>
                                        Popular
                                    </span>
                                )}
                            </div>

                            {/* Middle section */}
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex gap-2.5 items-center'>
                                    <Bolt />
                                    <div>
                                        <p className='text-[#5A2A82] poppins-medium text-[16px]'>{item[PlansEnum.title1]}</p>
                                        <p className='text-[#999999]'>{item[PlansEnum.label1]}</p>
                                    </div>
                                </div>
                                <div className='flex gap-2.5 items-center'>
                                    <Timer />
                                    <div>
                                        <p className='text-[#5A2A82] poppins-medium text-[16px]'>{item[PlansEnum.title2]}</p>
                                        <p className='text-[#999999]'>{item[PlansEnum.label2]}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            {item[PlansEnum.popular] ? (
                                <Button text={'Get Started'} />
                            ) : (
                                <button className="bg-[#5A2A821A] text-[#5A2A82] poppins-medium text-[16px] h-[52px] rounded-lg px-6 flex items-center justify-center transition-all duration-300 hover:bg-[#55277b1a] pointer">
                                    Get Started
                                </button>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Button text={'Start Free Trial'} />
                </motion.div>
            </div>
        </section>
    )
}

export default Plans
