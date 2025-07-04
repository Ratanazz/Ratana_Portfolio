import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'PHP', level: 80 },
    { name: 'Laravel', level: 80 },
    { name: 'MySQL', level: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;