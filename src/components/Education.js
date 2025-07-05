import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const education = [
    {
      institution: 'Royal University of Phnom Penh',
      major: 'Year 4 Information Technology Engineering (ITE)',
      year: '2022-2025',
    },
  ];

  const experience = [
    {
      company: 'DigitalDivideData Cambodia',
      role: 'Data Entry',
      year: 'June 05 2023 - June 30 2025',
    },
  ];

  const interests = [
    'Research Technology',
    'Listening to Music',
    'Cycling',
    'Play Games',
    'Coding',
  ];

  return (
    <section className="bg-gray-100 py-10 px-4 rounded-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education */}
        <div
          className="col-span-1 bg-white rounded-2xl p-6 shadow-md transition hover:shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6">🎓 Education</h2>
          <div className="space-y-4 border-l-4 border-purple-500 pl-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition"
                data-aos="fade-up"
                data-aos-once="false"
              >
                <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                <p className="italic text-gray-600 mt-1">{edu.major}</p>
                <p className="text-sm text-gray-700 font-semibold mt-1">
                  <span className="font-bold">Year:</span> {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div
          className="col-span-1 bg-white rounded-2xl p-6 shadow-md transition hover:shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6">💼 Experience</h2>
          <div className="space-y-4 border-l-4 border-purple-500 pl-4">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition"
                data-aos="fade-up"
                data-aos-once="false"
              >
                <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
                <p className="italic text-gray-600 mt-1">{job.role}</p>
                <p className="text-sm text-gray-700 font-semibold mt-1">
                  <span className="font-bold">Year:</span> {job.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div
          className="col-span-1 bg-white rounded-2xl p-6 shadow-md"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6">❤️ Interests</h2>
          <ul className="space-y-3">
            {interests.map((interest, index) => (
              <li
                key={index}
                className="bg-slate-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-slate-600 transition"
                data-aos="fade-up"
                data-aos-once="false"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
