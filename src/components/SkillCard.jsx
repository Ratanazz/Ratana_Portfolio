import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillCard = ({ name, level, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-50px', amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
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
    </motion.div>
  );
};

export default SkillCard;