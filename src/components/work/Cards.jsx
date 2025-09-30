import React from 'react'

const Cards = (props) => {



  return (
    <>

      <div className='w-1/2 group relative transition-all h-full bg-red-400 hover:rounded-4xl overflow-hidden '>
        <img src={props.image1} alt="" />
        <div className='absolute  group-hover:opacity-100 top-0 opacity-0  h-full w-full bg-black/10 transition-all text-white flex justify-center items-center  '>
          <h2 className='uppercase font-[font300] text-4xl border-2 rounded-full p-2 px-4'>projact</h2>
        </div>
      </div>
      <div className='w-1/2 group relative transition-all h-full bg-sky-400 hover:rounded-4xl overflow-hidden '>
        <img src={props.image2} alt="" />
        <div className='absolute  group-hover:opacity-100 top-0 opacity-0  h-full w-full bg-black/10 transition-all text-white flex justify-center items-center  '>
          <h2 className='uppercase font-[font300] text-4xl border-2 rounded-full p-2 px-4'>projact</h2>
        </div>
      </div>


    </>
  )
}

export default Cards