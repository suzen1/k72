import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
const stair = (props) => {

const locate = useLocation().pathname


    const stairAnimation = useRef(null)
    const pageref = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairAnimation.current, {
            display: 'block'
        })

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
        tl.to(stairAnimation.current, {
            display: 'none'
        })
        tl.to('.star', {
            y: '0',
        })
        gsap.from(pageref.current,{
            delay:1,
            opacity:0,
            duration:1,
            scale:0.95
        })

    },[locate])
   

    return (
        <div >
            <div className='w-full h-screen z-10 top-0 fixed  ' ref={stairAnimation}>
                <div className='w-full h-full flex '>
                    <div className='star bg-black w-1/5 h-full'></div>
                    <div className='star bg-black w-1/5 h-full'></div>
                    <div className='star bg-black w-1/5 h-full'></div>
                    <div className='star bg-black w-1/5 h-full'></div>
                    <div className='star bg-black w-1/5 h-full'></div>
                </div>
            </div>
           <div ref={pageref}>
             {props.children}
           </div>
        </div>

    )
}

export default stair