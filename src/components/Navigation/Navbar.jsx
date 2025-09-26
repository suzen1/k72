import React from 'react'
import { useRef } from 'react'
const Navbar = () => {
    const navRaf = useRef(null)
    return (
        <div className='fixed top-0 w-full flex justify-end  z-4'>
            <div className='w-[14vw] relative h-[8vh]'>
                <div onMouseEnter={() => {navRaf.current.style.height = '100%'}} 
                      onMouseLeave={() => {  navRaf.current.style.height = '0%'}} 
            className='w-full h-full bg-black flex justify-center items-center left-8'>
                 <div className=' h-full left- w-1/2 flex flex-col justify-center items-end space-y-1.5  '>
                        <div className='h-[0.5px] bg-white w-[50px] z-5'></div>
                        <div className='h-[0.5px] bg-white w-[30px] z-5'></div>
                    </div>
                   
                <div ref={navRaf} className='bg-amber-300 absolute transition-all top-[0%] h-full w-full'></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar