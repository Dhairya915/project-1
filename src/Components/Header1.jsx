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
    <header className="relative">

      {/* Top div with fading blue bottom border */}
      <div
        className="
        relative h-[50px] bg-white z-0

        /* thick outer fade */
        after:content-['']
        after:absolute after:bottom-0 after:left-0
        after:w-full after:h-[1px]
        after:bg-gradient-to-r
        after:from-[#3A53A4]
        after:via-[#3A53A4]/20
        after:to-[#3A53A4]

        /* thin inner line */
        before:content-['']
        before:absolute before:bottom-0 before:left-0
        before:w-full before:h-[0.5px]
        before:bg-gradient-to-r
        before:from-[#3A53A4]/60
        before:via-transparent
        before:to-[#3A53A4]/60
      "
      >

        {/* Social media left side */}
        <div className="absolute h-[28.95px] w-[208px] top-[15px] left-[80px] flex items-center justify-between">
          <span className="text-sm font-medium">Follow us</span>

          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/google_icon.png" alt="google logo" className="object-contain cursor-pointer" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="facebook logo" className="object-contain cursor-pointer" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="instagram logo" className="object-contain cursor-pointer" />
          </a>
        </div>

        {/* Right side (admission & phone) */}
        <div className="absolute w-[342px] h-[28.95px] top-[13px] left-[1091px] flex items-center justify-between px-1">
          <Link to="/admissions" className="flex items-center gap-3 text-sm font-medium">
            <PencilLine />
            <span>Admission Form</span>
          </Link>

          <div className="flex items-center gap-3 text-sm font-medium">
            <PhoneCall />
            <span>(914) 703-2250</span>
          </div>
        </div>

      </div>

      {/* Middle large logo overlapping top div */}
      <img
        src="/logo.png"
        alt="logo"
        className="
        absolute
        left-1/2 -translate-x-1/2
        top-0
        h-[155px]
        object-contain
        z-10
      "
      />

      {/* Bottom nav div */}
      <div className="flex items-center justify-between h-[105px]  px-6 py-4 bg-white relative z-0">

        {/* Left links */}
        <div className="flex items-center gap-8">
          <NavLink to="/about-us" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/academic-culture" className={navLinkClass}>Academic Culture</NavLink>
          <NavLink to="/school-culture" className={navLinkClass}>School Culture</NavLink>
          <NavLink to="/co-curricular" className={navLinkClass}>Co-Curricular</NavLink>
        </div>

        {/* Center logo */}
        <div className="flex-1 flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-[80px] object-contain" />
        </div>

        {/* Right links */}
        <div className="flex items-center gap-8">
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/admissions" className={navLinkClass}>Admissions</NavLink>
          <NavLink to="/contact-us" className={navLinkClass}>Contact Us</NavLink>

          {/* Search box */}
          <div className="relative w-[208px] h-[36px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              className="w-full h-full pl-10 pr-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#F0942A]"
              placeholder="Search..."
            />
          </div>

        </div>

      </div>
    </header>
  );

}


export default Header1


