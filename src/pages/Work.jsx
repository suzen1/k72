import { useGSAP } from '@gsap/react'
import Cards from '../components/work/Cards'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Work = () => {
  gsap.registerPlugin(ScrollTrigger)

 
  const work = [
    {
      image1: '/images/WS---K72.ca---Thumbnail.jpg',
      image2: '/images/PJC_SiteK72_Thumbnail_1280x960.jpg',
    },
    {
      image1: '/images/image1.jpg',
      image2: '/images/image3.jpg',
    }
    ,
     {
      image1: '/images/image1.jpg',
      image2: '/images/image3.jpg',
    }
  ]
useGSAP(()=>{
  gsap.from('.hero',{
    height:'100px',
    stagger:{
      amount:0.5
    },
    scrollTrigger:{
      trigger:'.CardMain',
      start:'top 70%',
      end:"top -100%",
      scrub:1.2,
      markers:true,
      
    }

  })
})
 

  return (
    <div className="p-4">
      <div className="pt-30 pb-1">
        <h1 className="uppercase text-[15vw] font-[500]">work</h1>
      </div>

      {/* Ref yaha attach kiya */}
      <div  className="CardMain -mt-10">
        {work.map(function(elem, index)  {
         return <div className='hero w-full   h-[400px] flex  gap-3 mt-2'>
         <Cards key={index} image1={elem.image1} image2={elem.image2} />
          </div>
})}
      </div>
    </div>
  )
}

export default Work

