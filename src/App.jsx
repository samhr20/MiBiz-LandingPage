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
import Faq from './Components/Faq'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import AppPreview from './Components/AppPreview'

const App = () => {

  const [SubPlans, setSubPlans] = useState([])
  const [Faqs, setFaqs] = useState([])
  const [Testimonial, setTestimonial] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const plans = await axios.get("http://localhost:3000/subscriptionPlans")
        const faqs = await axios.get("http://localhost:3000/faq")
        const testimonials = await axios.get("http://localhost:3000/testimonials")
        setSubPlans(plans.data)
        setFaqs(faqs.data)
        setTestimonial(testimonials.data)

      } catch (error) {
        console.error(error);

      }
    }

    fetchData()

  }, [])


  return (
    <div className=" poppins overflow-x-hidden">

      <div className="max-w-[1920px] ">
        <Navbar />
        <HeroSection />
        <VideoSection />
        <Features />
        <AppPreview/>
        <Plans SubPlans={SubPlans} />
        <About/>
        <Testimonials Testimonial={Testimonial}/>
        <Faq faq={Faqs} />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
