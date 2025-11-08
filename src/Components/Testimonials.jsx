import React from 'react'
import Star from '../assets/svg/Star.svg?react'
import TestimonialEnum from '../helpers/TestimonialsEnum'

const Testimonials = ({ Testimonial }) => {
    return (
        <section className='bg-[#F9F9F9] text-black w-screen rounded-3xl flex items-center justify-center py-[120px]'>
            <div className='flex flex-col items-center justify-between gap-[45px]'>
                <p className='text-[48px] poppins-semibold'>Testimonials</p>
                <div className='flex items-center justify-between min-w-[1440px]'>

                    {Testimonial.map((item, index) => (

                        <div key={index} className='max-w-[466px] flex flex-col items-center justify-between bg-white rounded-[9px]  py-10 px-[30px] gap-[30px]'>
                            <div className='flex items-center justify-between gap-[3.74px]'>
                                {Array.from({ length: item[TestimonialEnum.Stars] }).map((_, index) => (
                                    <Star key={index} />
                                ))}
                            </div>
                            <p className='dmSans text-[18px]'>{item[TestimonialEnum.Feedback]}</p>
                            <div className='flex flex-col items-center justify-between gap-[15px]'>
                                <img
                                    src={item[TestimonialEnum.UserImage]}
                                    alt={item[TestimonialEnum.UserImage]}
                                    className='rounded-full w-[52px] h-[52px]' />
                                <p className='dmSans-medium text-[22px]'>{item[TestimonialEnum.UserName]}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Testimonials