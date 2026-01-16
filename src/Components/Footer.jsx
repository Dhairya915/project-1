import React from 'react'
import { Instagram, Facebook, Twitter, Chromium } from 'lucide-react';
import { MapPin, SquareUser, PhoneCall, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (





        <div className="h-[400px] w-full bg-[#3A53A4] relative mt-5">

            {/* Logo */}
            <img
                src="./logo.png"
                alt="Logo"
                className="w-[160px] h-[160px] rounded-2xl bg-white absolute top-[50px] left-[80px]"
            />

            {/* Follow Us / Contact Section */}
            <div className="absolute top-[230px] left-[80px] w-[180px] h-auto text-white font-medium px-2 flex flex-col">
                <p className="text-[18px] font-medium mb-2">Follow us</p>

                {/* Social Icons */}
                <div className="flex gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#F0942A] flex items-center justify-center">
                        <Instagram />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#F0942A] flex items-center justify-center">
                        <Facebook />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#F0942A] flex items-center justify-center">
                        <Twitter />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#F0942A] flex items-center justify-center">
                        <Chromium />
                    </div>
                </div>
            </div>

            {/* address and contact us */}
            <div className='absolute h-[244px] w-[307px]  left-[421px] top-[57px] flex flex-col'>
                <div className='relative  h-[120px]'>
                    <MapPin stroke="#F0942A" strokeWidth={3} className=' h-[35px] w-[35px]' />
                    <span className='absolute font-bold text-[20px] left-[38.75px] top-[0.25px] text-white'>Address</span>
                    <div className='absolute w-[264px] h-[83px]  right-0'>
                        <span className='text-white text-[16px]'>1435, 51st Street, Building #5,
                            Second Floor, North Bergen,
                            NJ 07047</span>
                    </div>
                </div>

                <div className='relative  h-[124px]'>
                    <div className='absolute h-[94px] w-[265px]  bottom-0'>
                        <SquareUser stroke="#F0942A" strokeWidth={2} className=' h-[35px] w-[35px]' />
                        <span className='absolute font-bold text-[20px] left-[38.75px] top-[0.25px] text-white'>Contact Us</span>
                        <div className='absolute w-[215px] h-[25px]  right-0  top-[37px] flex items-center gap-5'>
                            <PhoneCall className='w-5 h-5 ' stroke="white" />
                            <span className='text-white text-[16px]'>(914) 703-2250</span>
                        </div>
                        <div className='absolute w-[215px] h-[25px]  right-0  top-[67px] flex items-center gap-4'>
                            <Mail className='w-5 h-5 ' stroke="white" />
                            <span className='text-white text-[16px]'>Contact@SSPPS.ac.in</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* links */}
            <div className='absolute w-[151px] h-[269px] text-white text-[18px] top-[57px] left-[809px] flex flex-col  justify-between '>
                <NavLink to="/about-us" >About Us</NavLink>
                <NavLink to="/academic-culture" >Academic Culture</NavLink>
                <NavLink to="/school-culture" >School Culture</NavLink>
                <NavLink to="/co-curricular" >Co-Curricular</NavLink>
                <NavLink to="/gallery" >Gallery</NavLink>
                <NavLink to="/admissions" >Admissions</NavLink>
                <NavLink to="/contact-us" >Contact Us</NavLink>
            </div>

            {/* map */}
            <div className="relative w-[454px] h-[311px] top-[57px] left-[996px] rounded-md bg-amber-200 overflow-hidden">
                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=23.0225,72.5714&z=15&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                />
            </div>

        </div>
    )
}

export default Footer