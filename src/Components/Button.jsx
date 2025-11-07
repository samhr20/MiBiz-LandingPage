import React from 'react'

const Button = ({text}) => {
  return (
   <button className="bg-[#5A2A82] poppins-medium text-white h-[52px] rounded-lg p-2.5 flex gap-2 items-center justify-center text-[18px] pointer">{text}</button>
  )
}

export default Button