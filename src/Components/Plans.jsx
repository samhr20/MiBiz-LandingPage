import React from 'react'
import PlansEnum from '../helpers/PlansEnum'

const Plans = ({SubPlans}) => {

    return (
        <section className='w-screen bg-[#F9F9F9] rounded-3xl py-[120px] flex items-center justify-center'>
           <div className='flex flex-col items-center justify-between'>
            <p className='poppins-semibold text-[48px]' >Subscription Plans</p>
            <div className='flex items-center justify-between gap-6'>
                {SubPlans.map((item)=>(
                  <p>{item[PlansEnum.timePeriod]}</p>
                ))}
                <div className={``}>

                </div>
            </div>
           </div>
        </section>
    )
}

export default Plans