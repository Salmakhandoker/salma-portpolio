import React from 'react';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">

          <img className='W -full h-full rounded-full' src="pic.jpg" alt="logo" />
        </div>
        <span className="font-bold text-xl tracking-tighter uppercase">SALMA</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a className="text-brand" href="#">Home</a>
        <a className="hover:text-white transition" href="#">Portfolio</a>
        <a className="hover:text-white transition" href="#">About</a>
        <a className="hover:text-white transition" href="#">Blog</a>
        <a className="hover:text-white transition" href="#">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="text-xs font-bold tracking-widest uppercase hover:text-brand transition">LET'S TALK</button>
        <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
          <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
