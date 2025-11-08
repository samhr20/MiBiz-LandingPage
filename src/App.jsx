import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import VideoSection from './Components/VideoSection'

const App = () => {
  return (
    <div className=" poppins ">

      {/* Container */}

      <div className="max-w-[1920px] ">
        <Navbar />
        <HeroSection/>
        <VideoSection/>
      </div>
<div>
  
</div>
    </div>
  )
}

export default App
