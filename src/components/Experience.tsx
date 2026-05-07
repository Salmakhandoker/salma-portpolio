import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: 'Dec, 2025 - present',
      role: 'Student of progrraming hero',
      company: 'progrraming hero Bangladesh',
      active: true,
    },
    {
      date: 'Nov, 2024 - april, 2025',
      role: 'Project Manager',
      company: 'Hybrid Bangladesh',
      active: true,
    },
    {
      date: 'sep, 2023 - JAN, 2024',
      role: 'data analyst',
      company: 'ICT division ',
      active: false,
    },
    {
      date: 'OCT, 2014 - JAN, 2018',
      role: 'payroll officer',
      company: 'Rising Group of company',
      active: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-start">
        <div className="text-6xl text-brand/20 font-mono">&lt;/&gt;</div>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full border ${exp.active ? 'border-brand/30' : 'border-gray-800'} flex items-center justify-center shrink-0`}>
              <div className={`w-1.5 h-1.5 ${exp.active ? 'bg-brand' : 'bg-gray-600'} rounded-full`}></div>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold">{exp.date}</p>
              <h3 className="text-lg font-bold">{exp.role}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
