import React from 'react';

const About = () => {
  return (
    <div className="bg-card-bg/40 p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-6">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Expert Web Development <br />
          Services for Complex <span className="text-brand">Digital <br /> Product Challenges</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          I am a skilled full stack developer with a strong focus on crafting seamless and responsive digital experiences. From developing dynamic user interfaces to building robust backend systems, I combine technical expertise with a deep understanding of design principles.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-300 italic font-medium">
            <span className="text-brand">✓</span> Full Stack Web Development
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 italic font-medium">
            <span className="text-brand">✓</span> WordPress
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 italic font-medium">
            <span className="text-brand">✓</span> UI/UX Design
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 italic font-medium">
            <span className="text-brand">✓</span> SEO
          </div>
        </div>
        <button className="bg-brand/10 border border-brand/20 text-brand px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-brand/20 transition">
          View My Journey
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt="Abstract 3D sphere"
          className="rounded-full w-64 h-64 object-contain grayscale brightness-125"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcPmSlnQfW9EVAbzEg0k0ypeyqR5nn7yWzMIKOwOhgCCZNUfyXCOD578oMAPgP593iNojbIo275vZ8QuI2-MR51HhYfquDWLQnWMqRrYZ6ppMCjr6mFahKytdccdI5oS9fvxhA1BYPVoswMxB0SwD5Rr0-C9To8r-0fYimbGJjhSqi0qsIfrKzpph6gFK9FKlyLQsmGiZBooUXFznSUm-HVc8O-lnSXka0jfPm_kgLX4lSIDuFru4kxIMtyydTs3szwqBqBNtFB-U"
        />
      </div>
    </div>
  );
};

export default About;
