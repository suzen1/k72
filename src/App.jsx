import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Work from './pages/Work'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
const stairAnimation = useRef(null)

  useGSAP(function()  {
    const tl = gsap.timeline()
    tl.from('.star', {

      height: 0,
      stagger: {
        amount: -0.3,
      }

    })

    tl.to('.star', {
      y: '100%',
      stagger: {
        amount: -0.3,
      },
    })
    tl.to('.star', {
      y:'0%',
      
    })
  })

  return (
    <div>
     <div className='w-full h-screen z-10 top-0 fixed  ' ref={stairAnimation}>
       <div className='w-full h-full flex '>
        <div className='star bg-black w-1/5 h-full'></div>
        <div className='star bg-black w-1/5 h-full'></div>
        <div className='star bg-black w-1/5 h-full'></div>
        <div className='star bg-black w-1/5 h-full'></div>
        <div className='star bg-black w-1/5 h-full'></div>
      </div>
     </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Agence' element={<Agence />} />
        <Route path='/Work' element={<Work />} />


      </Routes>
    </div>
  )
}

export default App