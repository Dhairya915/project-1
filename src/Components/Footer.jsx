import React from 'react'
import { Instagram, Facebook, Twitter, Chromium } from 'lucide-react';
import { MapPin, SquareUser, PhoneCall, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (

        <div className="w-full bg-[#3A53A4] mt-5">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">

                    {/* LOGO + SOCIAL */}
                    <div className="flex flex-col gap-4">
                        <img
                            src="./logo.png"
                            alt="Logo"
                            className="w-[140px] h-[140px] rounded-2xl bg-white p-2"
                        />

                        <p className="text-lg font-medium">Follow us</p>

                        <div className="flex gap-3">
                            <div className="w-7 h-7 rounded-full bg-[#F0942A] flex items-center justify-center">
                                <Instagram />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-[#F0942A] flex items-center justify-center">
                                <Facebook />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-[#F0942A] flex items-center justify-center">
                                <Twitter />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-[#F0942A] flex items-center justify-center">
                                <Chromium />
                            </div>
                        </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-3">
                            <MapPin stroke="#F0942A" strokeWidth={3} size={25} className='shrink-0'/>
                            <div>
                                <p className="font-bold text-lg">Address</p>
                                <p className="text-sm leading-relaxed">
                                    1435, 51st Street, Building #5,
                                    Second Floor, North Bergen,
                                    NJ 07047
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 mt-4">
                            <SquareUser stroke="#F0942A" strokeWidth={2} size={25} className='shrink-0'/>
                            <div>
                                <p className="font-bold text-lg">Contact Us</p>

                                <div className="flex items-center gap-3 mt-2 text-sm">
                                    <PhoneCall className="w-4 h-4" stroke="white" />
                                    <span>(914) 703-2250</span>
                                </div>

                                <div className="flex items-center gap-3 mt-1 text-sm">
                                    <Mail className="w-4 h-4" stroke="white" />
                                    <span>Contact@SSPPS.ac.in</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col gap-3 text-lg">
                        <NavLink to="/about-us">About Us</NavLink>
                        <NavLink to="/academic-culture">Academic Culture</NavLink>
                        <NavLink to="/school-culture">School Culture</NavLink>
                        <NavLink to="/co-curricular">Co-Curricular</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/admissions">Admissions</NavLink>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </div>

                    {/* MAP */}
                    <div className="w-full h-[250px] rounded-md overflow-hidden">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps?q=23.0225,72.5714&z=15&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        />
                    </div>

                </div>

                {/* BOTTOM LINE */}
                <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-white">
                    © {new Date().getFullYear()} Shree B.S. Goswami Saraswati Shishumandir. All rights reserved.
                </div>

            </div>
        </div>

    )
}

export default Footer