import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutUs from './AboutUs';
import AcademicCulture from './AcademicCulture';
import schoolCulture from './schoolCulture';
import CoCurricular from './coCurricular';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Admission from './Admission';
import Home from './Home';
import PageNotFound from './PageNotFound';
import { NavLink } from 'react-router-dom';

function Navbar() {


  return (
    <header className="w-full bg-white shadow-sm h-[119px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">

        <div className="flex items-center gap-6 ">
          <img
            src="/logo.png"
            alt="School Logo"
            className="w-[113px] h-[106px] top-[50px]"
          />
        </div>
          <div className='w-fit h-[53px] top-[32px] left-[205px]'>
            <h1 className="text-[#F0942A] font-semibold text-lg">
              Shree B.S. Goswami
            </h1>
            <p className="text-[#3A53A4] text-sm">
              Sarswati Shishumandir, Dholka
            </p>
          </div>
      

        {/* Menu */}
        <div>
          <nav className="flex items-center w-[839px] h-[24px] top-[49px] left-[593px] justify-between  bg-white">
            <div className="flex gap-6">
              <NavLink to="/about-us" >About Us</NavLink>
              <NavLink to="/academic-culture" >Academic Culture</NavLink>
              <NavLink to="/school-culture" >School Culture</NavLink>
              <NavLink to="/co-curricular" >Co-Curricular</NavLink>
              <NavLink to="/gallery" >Gallery</NavLink>
              <NavLink to="/admissions" >Admissions</NavLink>
              <NavLink to="/contact-us" >Contact Us</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar