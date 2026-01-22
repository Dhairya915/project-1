import React, { useState } from "react";
import { PencilLine, PhoneCall, Search, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Header1() {
  const [menuOpen, setMenuOpen] = useState(false);


  const navLinkClass = ({ isActive }) =>
    `relative text-[#3A53A4] transition-all duration-200
     ${isActive
      ? "font-bold after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[36px] after:h-[2px] after:bg-[#F0942A] after:rounded"
      : "font-medium"
    }`;


  const mobileNavLinkClass = ({ isActive }) =>
    `text-[#3A53A4] transition ${isActive ? "font-semibold" : "font-medium"
    }`;

  return (
    <header className="w-full">

      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-white px-4 md:px-16 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          {/* Follow us */}
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="text-sm font-medium whitespace-nowrap">Follow us</span>

            <img src="/google_icon.png" alt="google" className="w-5 h-5 md:w-6 md:h-6" />
            <img src="/facebook.png" alt="facebook" className="w-5 h-5 md:w-6 md:h-6" />
            <img src="/instagram.png" alt="instagram" className="w-5 h-5 md:w-6 md:h-6" />
          </div>

          {/* Admission + Phone */}
          <div className="flex items-center gap-4 justify-center sm:justify-end text-sm font-medium">
            <Link to="/admissions" className="flex items-center gap-2 whitespace-nowrap">
              <PencilLine className="w-4 h-4 md:w-5 md:h-5" />
              Admission Form
            </Link>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
              (914) 703-2250
            </div>
          </div>

        </div>
      </div>

      {/* ================= LOGO ================= */}
      {/* ================= LOGO ================= */}
      <div className="relative w-full flex justify-center mt-6 sm:mt-8 md:-mt-8">
        {/* Gradient line behind logo */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-[#3A53A4] via-[#3A53A4]/20 to-[#3A53A4] hidden md:block" />

        <img
          src="/logo.png"
          alt="logo"
          className="relative z-10 h-[80px] sm:h-[90px] md:h-[120px] object-contain"
        />
      </div>


      {/* ================= NAV ================= */}
      <nav className="w-full px-4 md:px-16 py-2 flex items-center justify-between">

        {/* Mobile Hamburger (LEFT) */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="flex gap-8">
            <NavLink to="/about-us" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/academic-culture" className={navLinkClass}>Academic Culture</NavLink>
            <NavLink to="/school-culture" className={navLinkClass}>School Culture</NavLink>
            <NavLink to="/co-curricular" className={navLinkClass}>Co-Curricular</NavLink>
          </div>

          <div className="flex gap-8 items-center">
            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/admissions" className={navLinkClass}>Admissions</NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>Contact Us</NavLink>

            <div className="relative w-[208px] h-9">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full pl-10 pr-3 border border-gray-300 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= LEFT DRAWER ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold text-[#3A53A4]">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <NavLink to="/about-us" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/academic-culture" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Academic Culture</NavLink>
          <NavLink to="/school-culture" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>School Culture</NavLink>
          <NavLink to="/co-curricular" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Co-Curricular</NavLink>
          <NavLink to="/gallery" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/admissions" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Admissions</NavLink>
          <NavLink to="/contact-us" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </div>
      </div>

    </header>
  );
}

export default Header1;





