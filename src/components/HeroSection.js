import React from 'react'
import myimage from '../assets/img/me.png'
import testimg from '../assets/img/cat.jpg'
function HeroSection() {
  return (
   <div className="h-full">
       <div className="h-screen flex justify-between items-center w-3/4 mx-auto">
        <img src= {testimg} className='w-60 h-60 object-cover rounded-full'/>
        <div className="w-1/2">
            <h1 className='text-xl md:text-2xl font-semibold'>Hello!I'm ChuonChanratana</h1>
            <h2 className='text-xl md:text-lg font-normal'>I'm a Web  Developer passionate about creating sleek, responsive, and modern websites. Let’s build something amazing together!
        </h2>
        </div>
       </div>
   </div>
  )
}

export default HeroSection