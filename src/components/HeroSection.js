import React from 'react';
import myimage from '../assets/img/me2.jpg';
import bgimage from '../assets/img/test.jpg'; // make sure you have a suitable background image

function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-white">
      
      {/* to blue background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgimage}
          alt="Background"
          className="w-full h-full object-cover  brightness-50"
        />
      </div>

      {/* content*/}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-5/6 max-w-6xl mx-auto h-full py-10 text-white brightness-58  gap-12 md:gap-30">
        
        
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={myimage}
            alt="Chuon Chanratana"
            className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg bg-white/90 backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hello! <br />  I'm<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Chuon ChanRatana</span>
          </h1>
          <h2 className="text-lg md:text-2xl leading-relaxed">
            I'm a Web Developer passionate about creating sleek, responsive, and modern websites.
            Let’s build something amazing together!
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
