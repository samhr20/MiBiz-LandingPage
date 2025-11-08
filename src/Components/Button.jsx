import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="bg-[#5A2A82] text-white poppins-medium text-[18px] h-[52px] rounded-lg px-6 flex items-center justify-center transition-all duration-300 hover:bg-[#4a2470] pointer">
      {text}
    </button>
  )
}

export default Button
