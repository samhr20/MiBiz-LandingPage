import React, { useRef, useState } from 'react'
import Star from '../assets/svg/Star.svg?react'
import TestimonialEnum from '../helpers/TestimonialsEnum'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Testimonials = ({ Testimonial }) => {
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const data = [
        {
            "Stars": 5,
            "Feedback": "Lorem ipsum dapibus dis nisl at nisl proin urna enim ultricies cras pellentesque feugiat feugiat purus tincidunt in eu est tristique nisi viverra fermentum urna in scelerisque diam tincidun",
            "UserImage": "/User1.png",
            "UserName": "Darrell Steward"
        },
        {
            "Stars": 5,
            "Feedback": "Lorem ipsum dapibus dis nisl at nisl proin urna enim ultricies cras pellentesque feugiat feugiat purus tincidunt in eu est tristique nisi viverra fermentum urna in scelerisque diam tincidun",
            "UserImage": "/User2.png",
            "UserName": "Wade Warren"
        },
        {
            "Stars": 5,
            "Feedback": "Lorem ipsum dapibus dis nisl at nisl proin urna enim ultricies cras pellentesque feugiat feugiat purus tincidunt in eu est tristique nisi viverra fermentum urna in scelerisque diam tincidun",
            "UserImage": "/User3.png",
            "UserName": "Guy Hawkins"
        },
        {
            "Stars": 5,
            "Feedback": "Lorem ipsum dapibus dis nisl at nisl proin urna enim ultricies cras pellentesque feugiat feugiat purus tincidunt in eu est tristique nisi viverra fermentum urna in scelerisque diam tincidun",
            "UserImage": "/User3.png",
            "UserName": "Shubham Saini"
        },
        {
            "Stars": 5,
            "Feedback": "Lorem ipsum dapibus dis nisl at nisl proin urna enim ultricies cras pellentesque feugiat feugiat purus tincidunt in eu est tristique nisi viverra fermentum urna in scelerisque diam tincidun",
            "UserImage": "/User2.png",
            "UserName": "Manish Verma"
        },
        {
            "Stars": 4,
            "Feedback": "Lorem ipsum dapibus dis nisl at nisl proin urna enim ultricies cras pellentesque feugiat feugiat purus tincidunt in eu est tristique nisi viverra fermentum urna in scelerisque diam tincidun",
            "UserImage": "/User1.png",
            "UserName": "Lalit Saini"
        }
    ]

    return (
        <section className='bg-[#5A2A82] text-white w-screen flex flex-col items-center justify-center py-[100px]'>
            <div className=' min-w-[1440px] flex flex-col items-center justify-between gap-[50px]'>
                <div className='text-center'>
                    <p className='text-[52px] poppins-semibold  '>Our User Loves us</p>
                    <p className='text-[16px]   '>Real stories from real users who simplified their business journey with MyBiz Partner.</p>
                </div>

                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={3}
                    className='max-w-[1440px]'
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='max-w-[466px] bg-transparent rounded-[9px] border border-[#FFFFFF33] py-10 px-[30px] flex flex-col items-center justify-between gap-[30px]'>
                                <div className='flex items-center justify-between gap-[3.74px]'>
                                    {Array.from({ length: item[TestimonialEnum.Stars] }).map((_, i) => (
                                        <Star key={i} />
                                    ))}
                                </div>
                                <p className='dmSans text-[18px] text-center text-[#DED4E6]'>{item[TestimonialEnum.Feedback]}</p>
                                <div className='flex flex-col items-center justify-between gap-[15px]'>
                                    <img src={item[TestimonialEnum.UserImage]} alt={item[TestimonialEnum.UserImage]} className='rounded-full w-[52px] h-[52px]' />
                                    <p className='dmSans-medium text-[22px]'>{item[TestimonialEnum.UserName]}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex gap-1 '>
                    {Testimonial.slice(0, Math.ceil(Testimonial.length / 3)).map((_, i) => (
                        <div
                            key={i}
                            onClick={() => swiperRef.current.slideToLoop(i * 3)}
                            className={`h-2 rounded-full cursor-pointer transition-all duration-300 
                                 ${Math.floor(activeIndex / 3) === i
                                    ? 'w-9 bg-[#693891]'
                                    : 'w-4 bg-[#D9D9D9]'
                                }`}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Testimonials
