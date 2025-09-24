import React from 'react'
import Video from './Video'

const HomeHeroTop = () => {
  return (
    <div className='font-[font300] text-white text-center'>
        <div className='text-[9.5vw]  leading-[8vw] uppercase tracking-wider'>The spark for</div>
        <div className='text-[9.5vw]  leading-[8vw] uppercase flex justify-center items-center tracking-wider'>
          all
          <div className='flex justify-center items-start overflow-hidden w-[17vw] h-[15vh] rounded-full object-cover mb-5'>
            <Video />
          </div>
          things
        </div>
        <div className='text-[9.5vw]  leading-[8vw] uppercase tracking-wider'>creative</div>
    </div>
  )
}

export default HomeHeroTop