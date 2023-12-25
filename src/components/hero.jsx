import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null);

  // const togglePlayPause = () => {
  //   if (videoRef.current) {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   }
  // };
 

  return (
    <div className='border-4 border-red-600'>
        <div className='absolute  w-fit h-fit'>

      <p className='text-[20rem] top-[0vh]   font-extrabold text-blue-200'>We</p>
      <p className='text-6xl   font-extrabold text-blue-200'>will make you perfect</p>
        </div>
      {/* <p>are here to comfort you</p> */}

      <video className=' w-[100vw]' ref={videoRef} id='vid' src="/src/assets/hero.mp4" autoPlay muted loop></video>


    </div>
  )
}

export default Hero
