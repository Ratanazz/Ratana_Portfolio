import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillCard = ({ name, level, index }) => {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);

  return (
    <div
      data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
        <span className="text-sm text-slate-600">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
