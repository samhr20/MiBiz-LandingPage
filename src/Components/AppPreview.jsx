import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'motion/react'


const AppPreview = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef(null)

   
    
 

    const images = [
        "/app_review/LOGIN.webp",
        "/app_review/SUBSCRIPTION.webp",
        "/app_review/INSIGHTS.webp",
        "/app_review/ADD LEAD.webp",
        "/app_review/LEADS LIST.webp",
        "/app_review/CUSTOMER DETAILS.webp",
        "/app_review/ADD ORDER.webp",
        "/app_review/NOTIFICATION.webp",
        "/app_review/MORE.webp",
        "/app_review/SUPPORT.webp",


    ]

    return (
        <section className='bg-[#F6F4FF] w-screen flex flex-col items-center justify-center pt-[50px] pb-[150px]'>
            <div className='flex items-center justify-center flex-col gap-[45px]'>

                <motion.p
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='text-[48px] poppins-semibold text-center mb-5.5'>
                    Our App  <span className='text-[#5A2A82]'> Preview </span>
                </motion.p>


                <div
                    className=' max-w-[1932px] px-30  relative  '>

                    <div className='absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]  z-30'>
                        <img src="/Frame.png"
                            className={` h-[716px] scale-100  `}
                            alt="" />
                    </div>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        slidesPerView={5}
                        centeredSlides={true}
                        spaceBetween={40}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        
                    >
                        {images.map((item, index) => (
                            <SwiperSlide key={index} >
                                <img
                                    src={item}
                                    alt=""
                                    className={`transition-all duration-500 ease-in-out object-center ${activeIndex === index ? 'rounded-2xl'  :''} 
                  
                 h-[680px] `}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>



                </div>



                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='flex gap-1 '>
                    {images.slice(0, Math.ceil(images.length / 5)).map((_, i) => (
                        <div
                            key={i}
                            onClick={() => swiperRef.current.slideToLoop(i * 3)}
                            className={`h-2 rounded-full mt-8 cursor-pointer transition-all duration-300 
                                    ${Math.floor(activeIndex / 3) === i
                                    ? 'w-9 bg-[#5A2A82]'
                                    : 'w-4 bg-[#D9D9D9]'
                                }`}
                        />
                    ))}
                </motion.div>



            </div>
        </section>
    )
}

export default AppPreview
