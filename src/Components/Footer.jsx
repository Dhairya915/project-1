import React from 'react'
import { Instagram, Facebook, Twitter, Chromium } from 'lucide-react';

function Footer() {
    return (





        <div className="h-[400px] bg-[#3A53A4] relative">

            {/* Logo */}
            <img
                src="./logo.png"
                alt="Logo"
                className="w-[160px] h-[160px] rounded-2xl bg-white absolute top-[50px] left-[80px]"
            />

            {/* Follow Us / Contact Section */}
            <div className="absolute top-[230px] left-[80px] w-[180px] h-auto text-white font-medium px-2 flex flex-col">
                <p className="text-[20px] font-medium mb-2">Follow us</p>

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

        </div>
    )
}

export default Footer