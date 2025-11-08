import React, { useState } from 'react'
import Minus from '../assets/svg/Minus.svg?react'
import Plus from '../assets/svg/Plus.svg?react'
import FaqsEnum from '../helpers/FaqsEnum'

const Faq = ({ faq }) => {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleFaq = (index) => {
        setOpenIndex(prev => (prev === index ? 0 : index))
    }

    return (
        <section className='bg-white text-black w-screen py-[120px] flex items-center justify-center'>
            <div className='flex items-center justify-between flex-col gap-[45px]'>
                <p className='poppins-semibold text-[48px]'>Frequently Asked Questions</p>

                <div className='flex flex-col items-center justify-between gap-5'>
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className='w-[952px] rounded-xl flex flex-col justify-between gap-2.5 border border-[#00000021] py-4 px-5 transition-all duration-200 ease-in-out'
                        >
                            <div
                                onClick={() => toggleFaq(index)}
                                className='flex items-center justify-between cursor-pointer'
                            >
                                <p className='poppins-semibold text-[18px]'>{item[FaqsEnum.Question]}</p>
                                {openIndex === index ? <Minus /> : <Plus />}
                            </div>

                            <div
                                className={` transition-all duration-300 ease-in-out ${openIndex === index ? ' opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className='text-[16px] text-[#4C4C4C]'>{item[FaqsEnum.Answer]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
