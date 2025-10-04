import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Funder = () => {
useEffect(() => {
  const animation = gsap.to("body", {
    backgroundColor: "black",
    scrollTrigger: {
      trigger: "#section2",
      start: "top 50%",
      end: "top 50%",
      scrub: 1,
      toggleActions: "play reverse play reverse",
      markers: true,
    },
  });

  return () => {
    animation.scrollTrigger.kill();
    animation.kill();
  };
}, []);


  return (
    <div id="section2">
      <div className="w-full h-screen relative overflow-hidden">
        {/* 🔶 Top Marquee */}
        <div className="absolute top-[20%] w-full h-[18vh] bg-amber-700 flex items-center overflow-hidden">
          <h1 className="text-[5.5vw] text-amber-300 uppercase font-semibold whitespace-nowrap animate-marquee">
            Suzen Ali • Suzen Ali • Suzen Ali • Suzen Ali • Suzen Ali • Suzen Ali •
          </h1>
        </div>

        {/* 🖼️ Center Image */}
        <div className="absolute left-[35%] top-[20%] w-[30vw] h-[80vh] rounded-3xl overflow-hidden z-10">
          <img
            src="public/images/co-image.jpg"
            alt="Suzen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🔶 Bottom Marquee (Reverse) */}
        <div className="absolute bottom-[10%] w-full h-[18vh] bg-amber-700 flex items-center overflow-hidden">
          <h1 className="text-[5.5vw] text-amber-300 uppercase font-semibold whitespace-nowrap animate-marquee-reverse">
            Suzen Ali • Suzen Ali • Suzen Ali • Suzen Ali • Suzen Ali • Suzen Ali •
          </h1>
        </div>
      </div>

      {/* Just for scroll space */}
    
    </div>
  );
};

export default Funder;
