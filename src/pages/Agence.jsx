import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { useRef } from 'react'
import MainBottum from '../components/agance/MainBottum'

const Agence = () => {
  const imag = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.to(imag.current, {
      // scale:2,
      // x:100,

      scrollTrigger: {
        trigger: imag.current,
        // markers:true,
        start: "top 37%",
        end: "top -100%",
        scrub: 1,
        // pin:true,
      }
    })
  })

  return (
    <div>
      <div className="section1 py-1">
        <div ref={imag} className='w-[10vw] h-[15vh] top-60 left-60 object-cover   absolute '>
          <img className='rounded-xl ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='  mt-25 font-[font500] relative'>
          <h1 className='uppercas text-[17vw] text-center leading-[35vh]'>SEVEN7Y<br />
            TWO</h1>
        </div>
        <div className='pl-[50%] font-[font500]'>
          <p className='text-[5vh] leading-[5.5vh] ' >&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
        <div>
          <MainBottum />
        </div>
      </div>
      <div className="section2">

      </div>
    </div>
  )
}

export default Agence