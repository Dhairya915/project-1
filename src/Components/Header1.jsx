import React from 'react'
import { PencilLine, PhoneCall, Search } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

function Header1() {

  const navLinkClass = ({ isActive }) =>
    `relative text-[#3A53A4] transition-all duration-200
   ${isActive
      ? "font-bold after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[36px] after:h-[2px] after:bg-[#F0942A] after:rounded"
      : "font-medium"
    }`;

  return (

    <header className="w-full">

      {/* Top bar */}
      <div className="w-full bg-white px-4 md:px-16 py-2 flex flex-wrap md:flex-nowrap justify-between items-center">

        {/* Left social icons */}
        <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-0">
          <span className="text-sm font-medium">Follow us</span>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/google_icon.png" alt="google" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="facebook" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="instagram" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>

        {/* Right admission & phone */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/admissions" className="flex items-center gap-1 md:gap-3 text-sm md:text-sm font-medium">
            <PencilLine size={18} md:size={20} />
            <span>Admission Form</span>
          </Link>
          <div className="flex items-center gap-1 md:gap-3 text-sm md:text-sm font-medium">
            <PhoneCall size={18} md:size={20} />
            <span>(914) 703-2250</span>
          </div>
        </div>

      </div>

      {/* Logo with line behind */}
      <div className="relative w-full flex justify-center -mt-6 md:-mt-12">

        {/* Gradient line behind logo */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] md:h-[1px] bg-gradient-to-r from-[#3A53A4] via-[#3A53A4]/20 to-[#3A53A4] z-0 hidden md:block"></div>

        <img src="/logo.png" alt="logo" className="relative z-10 h-[80px] md:h-[120px] object-contain" />
      </div>

      {/* Bottom nav */}
      <nav className="w-full flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-16 py-2 gap-2 md:gap-0">

        {/* Left links */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-8 justify-center md:justify-start w-full md:w-auto">
          <NavLink to="/about-us" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/academic-culture" className={navLinkClass}>Academic Culture</NavLink>
          <NavLink to="/school-culture" className={navLinkClass}>School Culture</NavLink>
          <NavLink to="/co-curricular" className={navLinkClass}>Co-Curricular</NavLink>
        </div>

        {/* Right links + search */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-8 justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">

          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/admissions" className={navLinkClass}>Admissions</NavLink>
          <NavLink to="/contact-us" className={navLinkClass}>Contact Us</NavLink>

          {/* Search box */}
          <div className="relative w-full md:w-[208px] h-8 md:h-9 mt-2 md:mt-0 flex-shrink-0">
            <Search className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-8 md:pl-10 pr-2 md:pr-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#F0942A]"
            />
          </div>
        </div>
      </nav>

    </header>

  );

}


export default Header1


