import React from 'react'
import { Link } from 'react-router-dom'


const MomeHeroButtom = () => {
  return (
    <div className='font-[font300] text-white text-center flex  justify-center items-center gap-8   '>
      <div className='border-[1.9px] border-white rounded-full h-[8vw]  px-7   flex justify-center items-center  hover:border-amber-200 hover:text-amber-200 hover:backdrop-blur-2xl transition-colors duration-300 '>
        <Link to='/Work' className='text-[7vw] mt-2  font-extrabold tracking-widest uppercase ' >Work</Link>

      </div>

      <div className='border-[1.9px] border-white rounded-full h-[8vw]  px-7   flex justify-center items-center hover:border-amber-200 hover:text-amber-200 hover:backdrop-blur-2xl transition-colors duration-300  '>
        <Link to='/Agence' className='text-[7vw] mt-2  font-extrabold tracking-widest uppercase ' >Aency</Link>

      </div>
    </div>
  )
}

export default MomeHeroButtom