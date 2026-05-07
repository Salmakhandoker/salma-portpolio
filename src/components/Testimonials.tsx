import React from 'react';

const Testimonials = () => {
  return (
    <div className="space-y-6">
      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Client Testimonials</p>
      <h3 className="text-2xl font-bold">I've received <br /> <span className="text-brand">Glowing Reviews</span> <br /> from my clients!</h3>
      <div className="flex gap-4">
        <div className="flex-1 bg-white/5 p-4 rounded-xl text-[10px] italic text-gray-400 relative">
          "Developsajeeb did an amazing job managing the design of a site..."
          <div className="mt-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            <span className="not-italic font-bold text-white">Client Name</span>
          </div>
        </div>
        <div className="flex-1 bg-white/5 p-4 rounded-xl text-[10px] italic text-gray-400 relative">
          "Quick to respond and quickly understood the job. Provided good..."
          <div className="mt-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-700"></div>
            <span className="not-italic font-bold text-white">Client Name</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
