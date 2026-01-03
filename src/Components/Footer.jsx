import React from 'react'
import { Instagram, Facebook, Twitter, Chromium } from 'lucide-react';

function Footer() {
    return (
        <div className=" h-[400px] bg-[#3A53A4]  mt-1">

            {/* top part */}
            <div >

                {/* image */}
                <div>
                    <img className='w-[160px] h-[160px] mt-10 ml-[80px] mt-[50px] bg-white rounded-2xl' src="./logo.png" />
                </div>

                {/* contact */}

                <div className=" h-[78px] w-[180px] ml-[80px] my-4 text-white font-medium px-2 flex flex-col">
                    <p className="font-medium text-[20px] my-0">Follow us</p>

                    {/* Icons fixed to bottom */}
                    <div className="flex justify-start items-center mt-auto gap-2">
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



            <div>

            </div>
        </div>
    )
}

export default Footer