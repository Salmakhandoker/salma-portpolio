import React from 'react';

const Stats = () => {
  return (
    <div className="absolute right-0 top-0 space-y-4 hidden xl:block">
      <div className="bg-card-bg/80 backdrop-blur p-4 rounded-xl border border-white/5 text-center">
        <p className="text-2xl font-bold text-brand">5+</p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Years Of Experience</p>
      </div>
      <div className="bg-card-bg/80 backdrop-blur p-4 rounded-xl border border-white/5 text-center">
        <p className="text-2xl font-bold text-brand">110+</p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Project Complete</p>
      </div>
      <div className="bg-card-bg/80 backdrop-blur p-4 rounded-xl border border-white/5 text-center">
        <p className="text-2xl font-bold text-brand">99%</p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Client Satisfaction</p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <p className="text-gray-400 italic font-light text-xl">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Salma khandoker <br />
          <span className="text-brand">Web Developer</span>
        </h1>
        <p className="text-gray-500 max-w-md leading-relaxed">
          Providing expert web development services that design and develop interactive web platforms, perfectly reflecting your brand's identity and driving your business goals.
        </p>
        <button className="bg-brand text-black px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition">
          Hire Me
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
      </div>
      <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
        <div className="hero-circle-bg absolute inset-0 transform -rotate-12"></div>
        {/* Using standard img for now as per HTML, can be optimized with Next.js Image later */}
        <img
          alt="Salma khandoker"
          className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
          src="https://lh3.googleusercontent.com/aida/ADBb0ugqDdD1RdPtCj4jg8isO1jXOUOZeZMv-m3ppOUppBDL2SeGq6uL8cwKDTeoIv5KfyXeFO0F5xXzNFwWkWg-8Lwu388WfXNF9OH-LWSqTnxWeq4d74oyZY-Y9ZZexiWqD1uLdnRzKvMsYp3NWBxkMolK-2wtAONc1cE8x3wb1ZNIaqlgNk3faNy8xl9sANhp19Tpm9sm6umayHxVHpYEaxaKwcbOJ65UFmgwJMaXIIeXFLQzMHC5cGCbaFyysF6ab4Aks2SAdSbRWA"
        />
      </div>
      <Stats />
    </div>
  );
};

export default Hero;
