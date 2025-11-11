import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'motion/react'

const AppPreview = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef(null)


    const images = [
        "/MyInventory.png",
        "/MyInventory.png",
        "/MyInventory.png",
        "/MyInventory.png",
        "/MyInventory.png",
        "/MyInventory.png",
        "/MyInventory.png",
        "/MyInventory.png"
    ]

    return (
        <section className='bg-white w-screen flex flex-col items-center justify-center pt-[50px] pb-[100px]'>
            <div className='flex items-center justify-center flex-col gap-[45px]'>

                <motion.p
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='text-[48px] poppins-semibold text-center'>
                    Our App  <span className='text-[#5A2A82]'> Preview </span>
                </motion.p>

                {/* <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                > */}
                <div
                    className='max-w-[1932px]   relative'>

                   
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        slidesPerView={5}
                        centeredSlides={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className='max-w-screen '

                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}
                                className=''
                            >
                                <img
                                    src={src}
                                    alt={`slide-${index}`}
                                    className={`
                                        transition-all duration-500 ease-in-out rounded-[23px]
                                    ${activeIndex === index ? 'scale-101 opacity-100 z-10' : 'scale-90 opacity-80  z-0'}
                                `}
                                    width={348}
                                    height={776}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* </motion.div> */}
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
                            className={`h-2 rounded-full cursor-pointer transition-all duration-300 
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
