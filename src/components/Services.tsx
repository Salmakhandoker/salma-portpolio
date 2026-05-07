import React from 'react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Full Stack Web Development',
      desc: 'Creating Stunning and Functional Web Applications',
    },
    {
      id: '02',
      title: 'Website Design',
      desc: 'Creating Stunning and Functional Web Designs',
    },
    {
      id: '03',
      title: 'UI/UX Design',
      desc: 'Designing Intuitive and Engaging Experiences',
    },
    {
      id: '04',
      title: 'SEO & Digital Marketing',
      desc: 'Optimizing Visibility and Driving Growth',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-[10px] text-brand font-bold uppercase tracking-widest mb-2">Popular Services</p>
        <h2 className="text-2xl font-bold">My <span className="text-brand italic">Special Service</span> For your <br /> Business Development</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-card-bg border border-white/5 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-gray-500 font-mono">{service.id}</span>
            <h4 className="font-bold text-sm">{service.title}</h4>
            <p className="text-[10px] text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
