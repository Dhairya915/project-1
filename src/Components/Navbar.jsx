import React from 'react'
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AboutUs from './AboutUs';
import AcademicCulture from './AcademicCulture';
import schoolCulture from './schoolCulture';
import CoCurricular from './CoCurricular';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Admission from './Admission';
import Home from './Home';
import PageNotFound from './PageNotFound';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top bar */}
        <div className="flex items-center justify-between h-[80px] md:h-[119px]">

          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="School Logo"
              className="w-[70px] h-[70px] md:w-[113px] md:h-[106px]"
            />

            <div>
              <h1 className="text-[#F0942A] font-semibold text-sm md:text-lg">
                Shree B.S. Goswami
              </h1>
              <p className="text-[#3A53A4] text-xs md:text-sm">
                Sarswati Shishumandir, Dholka
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-6 text-[15px]">
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/academic-culture">Academic Culture</NavLink>
            <NavLink to="/school-culture">School Culture</NavLink>
            <NavLink to="/co-curricular">Co-Curricular</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/admissions">Admissions</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col gap-4 text-[16px]">
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/academic-culture">Academic Culture</NavLink>
              <NavLink to="/school-culture">School Culture</NavLink>
              <NavLink to="/co-curricular">Co-Curricular</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/admissions">Admissions</NavLink>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}



export default Navbar