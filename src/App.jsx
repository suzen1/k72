import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Work from './pages/Work'
import Navbar from './components/Navigation/Navbar'
import Fullscr from './components/Navigation/Fullscr'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {

  return (
    <div id="main-container" >
      <Fullscr />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agence" element={<Agence />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </div>
  )
}

export default App
