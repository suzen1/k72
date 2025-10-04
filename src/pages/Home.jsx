import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroTop from '../components/Home/HomeHeroTop'
import MomeHeroButtom from '../components/Home/MomeHeroButtom'

const Home = () => {
  return (
    <div>
        <div className="main w-full fixed h-screen   ">
<Video/>
        </div>
        <div className='w-full h-screen relative flex flex-col justify-between  overflow-hidden'>
            <HomeHeroTop/>
            <MomeHeroButtom/>
        </div>
    </div>
  )
}

export default Home