import React from 'react'
import Email from '../assets/svg/Email.svg?react'
import Chat from '../assets/svg/Chat.svg?react'
import Support from '../assets/svg/Support.svg?react'
import Button from './Button'

const Contact = () => {
  const data = [
    { icon: Email, Text: "Email Address", label: 'mibizpartner@gmail.com', btnText: "Email Us" },
    { icon: Chat, Text: "Chat", label: 'Chat with us now', btnText: "Chat Now" },
    { icon: Support, Text: "Support", label: 'We’re here to help', btnText: "Contact Us" }
  ]

  return (
    <section className="bg-[#F9F9F9] w-screen flex justify-center py-[120px] rounded-6">
      <div className="flex justify-center items-stretch gap-[21px] w-full ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[9px] flex flex-col justify-between px-[49px] py-10 w-[466px] min-h-[230px] "
          >
            <div className="flex flex-col gap-3.5">
              <item.icon className="w-[58px] h-[58px]" />
              <p className="poppins-medium text-[26px]">{item.Text}</p>
              <p className="text-[18px] text-[#838383]">{item.label}</p>
            </div>
            <div className="pt-5">
              <Button text={item.btnText} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact
