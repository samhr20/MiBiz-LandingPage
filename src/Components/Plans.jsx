import React from 'react'
import PlansEnum from '../helpers/PlansEnum'
import Button from '../Components/Button'
import Bolt from '../assets/svg/Bolt.svg?react'
import Timer from '../assets/svg/Timer.svg?react'

const Plans = ({ SubPlans }) => {

    return (
        <section className='w-screen bg-[#F9F9F9] rounded-3xl py-[120px] flex items-center justify-center'>
            <div className='flex flex-col items-center justify-between gap-8'>

                <p className='poppins-semibold text-[48px]' >Subscription Plans</p>

                <div className='flex items-center justify-between gap-6'>

                    {SubPlans.map((item, index) => (
                        <div key={index} className={`${item[PlansEnum.popular] ? 'bg-[#F5F2F7] ' : 'bg-white '} w-[517px] rounded-[22px] p-[50px] flex flex-col justify-between gap-[31px]`}>

                            <div className='relative flex flex-col gap-3.5'>
                                <p className='text-[18px] text-[#333333]'>{item[PlansEnum.timePeriod]}</p>
                                <p className={`poppins-semibold text-[60px] ${item[PlansEnum.popular] ? 'text-[#5A2A82]' : 'text-[#4C4C4C]'}`}>₹{item[PlansEnum.pricing]}</p>
                                <p className={`${item[PlansEnum.popular] ? 'text-[#4C4C4C]' : 'text-[#808080]'} `}>{item[PlansEnum.description]}</p>

                                {item[PlansEnum.popular] && (
                                    <span className='absolute top-0 right-0 bg-[#5A2A82] text-white poppins-medium text-[16px] rounded-[36px] py-1 px-4'>Popular</span>
                                )}
                            </div>

                            <div className='flex flex-col gap-[30px]'>
                               <div className='flex gap-2.5 items-center' >
                                    <Bolt/>
                                <div>
                                    <p className='text-[#5A2A82] poppins-medium text-[18px]'>{item[PlansEnum.title1]}</p>
                                    <p className='text-[#999999]'>{item[PlansEnum.label1]}</p>
                                </div>
                               </div>
                               <div className='flex gap-2.5 items-center' >
                                    <Timer/>
                                <div>
                                    <p className='text-[#5A2A82] poppins-medium text-[18px]'>{item[PlansEnum.title2]}</p>
                                    <p className='text-[#999999]'>{item[PlansEnum.label2]}</p>
                                </div>
                               </div>
                            </div>

                            {item[PlansEnum.popular] ? (
                                <Button text={'Get Started'} />
                            ) : (
                                <button className="bg-[#5A2A821A] text-[#5A2A82] poppins-medium text-[18px] h-[52px] rounded-lg px-6 flex items-center justify-center transition-all duration-300 hover:bg-[#55277b1a] pointer">
                                    Get Started
                                </button>
                            )}

                        </div>
                    ))}

                </div>

                <div>
                    <Button text={'Start Free Trial'}/>
                </div>
            </div>
        </section>
    )
}

export default Plans