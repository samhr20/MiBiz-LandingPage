import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import VideoSection from './Components/VideoSection'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Plans from './Components/Plans'
import { useEffect } from 'react'
import axios from 'axios'
import  Features  from './Components/Features'

const App = () => {

  const [SubPlans, setSubPlans] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/subscriptionPlans")
        setSubPlans(res.data)

      } catch (error) {
        console.error(error);

      }
    }

    fetchData()

  }, [])


  return (
    <div className=" poppins ">

      <div className="max-w-[1920px] ">
        <Navbar />
        <HeroSection />
        <VideoSection />
        <Features />
        {/* App Preview */}
        <Plans SubPlans={SubPlans} />x  
        {/* About Application */}
        {/* Testimonials */}
        {/* Faq */}
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
