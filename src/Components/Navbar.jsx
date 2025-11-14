import React from 'react'
import Button from './Button'
import Logo from '../assets/svg/Logo.svg?react'

const Navbar = ({ ScrollHandler, HomeRef, AboutRef, FeatureRef, SubscriptionRef, ContactUsRef }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[92px]  bg-white border-b border-[#00000017]  z-100 shadow-2xl flex items-center justify-around">


      <img src="/Logo.png"
        width={150}
        height={48}
      />

      {/* Links */}
      <div className="flex gap-[45px] text-black text-[16px] ">

        <span
          className='pointer'
          onClick={() => ScrollHandler(HomeRef)}
        >Home</span>
        <span
          className='pointer'
          onClick={() => ScrollHandler(AboutRef)}
        >About</span>
        <span
          className='pointer'
          onClick={() => ScrollHandler(FeatureRef)}
        >Features</span>
        <span
          className='pointer'
          onClick={() => ScrollHandler(SubscriptionRef)}
        >Subscription Plan</span>
        <span
          className='pointer'
          onClick={() => ScrollHandler(ContactUsRef)}
        >
          Contact Us
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button text={"App Store"} />
        <Button text={"Play Store"} />

      </div>
    </div>
  )
}

export default Navbar
