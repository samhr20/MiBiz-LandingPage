import React from 'react'
import Logo from '../../public/svg/Logo.svg?react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[108px]  bg-white border-b border-[#00000017]  z-100 shadow-2xl flex items-center justify-around"> 
      {/* Logo */}

      <Logo className="w-[172px] h-[58x]" />

      {/* Links */}
      <div className="flex gap-[45px] text-black text-[18px] ">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Subscription Plan</a>
        <a href="#">Contact Us</a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
      <Button text={"App Store"}/>
      <Button text={"Play Store"}/>

      </div>
    </div>
  )
}

export default Navbar
