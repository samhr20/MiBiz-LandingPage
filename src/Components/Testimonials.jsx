import React, { useRef, useState, useEffect } from 'react'
import Star from '../assets/svg/Star.svg?react'
import db from '../helpers/TestimonialsEnum'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import calls from "../call_handler/supabase_calls";

const Testimonials = () => {
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        getreview();
    }, [])

    const getreview = async () => {
        const value = await calls.getReviews();
        setData(value);

    }


    return (
        <section className='bg-[#5A2A82] text-white w-screen flex flex-col items-center justify-center py-[100px]'>
            <div className=' min-w-[1440px] flex flex-col items-center justify-between gap-[50px]'>
                <div className='text-center'>
                    <p className='text-[52px] poppins-semibold  '>Our User Loves us</p>
                    <p className='text-[16px]   '>Real stories from real users who simplified their business journey with Uplinorr Plus.</p>
                </div>

                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    slidesPerView={data.length < 3 ? data.length : 3}
                    className='max-w-[1440px] flex gap-3.5 '
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='max-w-[466px] bg-transparent rounded-[9px] border border-[#FFFFFF33] mx-3 py-10 px-[30px] flex flex-col items-center justify-between gap-[30px]'>
                                <div className='flex items-center justify-between gap-[3.74px]'>
                                    {Array.from({ length: item[db.TestimonialsEnum.Rating] }).map((_, i) => (
                                        <Star key={i} />
                                    ))}
                                </div>
                                <p className='dmSans text-[14px] text-center text-[#DED4E6]'>{item[db.TestimonialsEnum.Comment]}</p>

                                <div className='flex flex-col items-center justify-between gap-[15px]'>
                                    {item[db.TestimonialsEnum.User][db.userEnum.Image] === '' ?
                                        (<img src="/User1.png"  className='rounded-full w-[52px] h-[52px]' />)
                                        :
                                        (<img src={item[db.TestimonialsEnum.User][db.userEnum.Image]} alt={item[db.TestimonialsEnum.User][db.userEnum.Image]} className='rounded-full w-[52px] h-[52px]' />)}

                                    <p className='dmSans-medium text-[18px]'>{item[db.TestimonialsEnum.User][db.userEnum.Name]}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex gap-1 '>
                    {data.slice(0, Math.ceil(data.length / 3)).map((_, i) => (
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
