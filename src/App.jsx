import React, { useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

// Components
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'
import Plans from './Components/Plans'
import Features from './Components/Features'
import Faq from './Components/Faq'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import AppPreview from './Components/AppPreview'
import Privacy from './Components/Privacy'
import Terms from './Components/Terms'

const App = () => {

  const [SubPlans, setSubPlans] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const plans = await axios.get("http://localhost:3000/subscriptionPlans")
        setSubPlans(plans.data)
      } catch (error) {
        return [];
      }
    }

    fetchData()

  }, [])

  const HomeRef = useRef()
  const AboutRef = useRef()
  const FeatureRef = useRef()
  const SubscriptionRef = useRef()
  const ContactUsRef = useRef()

  const ScrollHandler = (refToScroll) => {
    window.scrollTo({
      top: refToScroll.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const HomePage = () => (
    <>
      <Navbar
        ScrollHandler={ScrollHandler}
        HomeRef={HomeRef}
        AboutRef={AboutRef}
        FeatureRef={FeatureRef}
        SubscriptionRef={SubscriptionRef}
        ContactUsRef={ContactUsRef}
      />

      <HeroSection ref={HomeRef} />
      <About ref={AboutRef} />
      <Features ref={FeatureRef} />
      <AppPreview />
      <Testimonials />
      <Plans SubPlans={SubPlans} ref={SubscriptionRef} />
      <Faq />
      <Footer ref={ContactUsRef} ScrollHandler={ScrollHandler}
        HomeRef={HomeRef}
        AboutRef={AboutRef}
        FeatureRef={FeatureRef}
        SubscriptionRef={SubscriptionRef}
      />
    </>
  )

  return (
    <Router>
      <div className="poppins overflow-x-hidden">
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Terms />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
