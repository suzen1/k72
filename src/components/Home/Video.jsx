import React from 'react'


const Video = () => {
  return (
    <div className='w-full h-full flex justify-center  items-center'>
      <video
        autoPlay
        muted
        loop
        className='w-full h-full object-cover '
        src="public/HomeVideo/69496b2d.mp4"
      ></video>
    </div>
  );
}

export default Video