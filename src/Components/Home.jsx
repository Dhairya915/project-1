import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';



function Home() {
    return (

        <div className='flex flex-col w-full overflow-y-auto'>


            <section className="relative h-[550px] gap-6 pl-15 py-25">

                <img
                    src="/back.jpg"
                    className="absolute inset-0 w-full h-full object-cover blur-sm"
                    alt="Background"
                />


                <div className="relative z-10 text-white p-6 flex flex-col gap-2 h-full justify-end">

                    <p className="font-ophelia text-4xl">Welcome to</p>


                    <p className="font-bold text-[2.5rem] leading-tight">
                        Shree B.S. Goswami Saraswati <br />
                        Shisumandir
                    </p>


                    <div className="flex flex-col gap-1 text-left text-base max-w-[623px]">
                        <p>A nurturing space for learning.</p>
                        <p>A foundation built on discipline.</p>
                        <p>
                            Cultural values rooted in the ideals of Saraswati Shishu Mandir.
                        </p>
                    </div>
                </div>
            </section>

            {/* new -1 */}
            <div className="p-2 bg-white h-[550px] flex gap-25">
                {/* image */}
                <div className=' mt-20 '>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 w-[590px]  ml-[80px]  m-80px ">
                        <div>
                            <img
                                src="/image2.png"
                                alt="Top Image"
                                className="w-full h-[200px] object-cover rounded"
                            />
                        </div>

                        <div className="row-span-2 flex items-center justify-center h-full">
                            <img
                                src="/image1.png"
                                alt="Right Column Image"
                                className="w-full h-full object-contain rounded"
                            />
                        </div>

                        <div>
                            <img
                                src="/image3.png"
                                alt="Bottom Image"
                                className="w-full h-[200px] object-cover rounded"
                            />
                        </div>

                    </div>
                </div>

                {/* data */}
                <div className='flex  w-[550px] h-[400px] my-25 '>

                    <div className="flex flex-col gap-2">
                        <span className="inline-block text-[20px] font-semibold text-[#F0942A]  py-3  w-fit">
                            Why We Are
                        </span>


                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                            Foundation for a Bright and Balanced Future
                        </h2>


                        <p className="text-gray-600 leading-loose ">
                            At Shree B.S. Goswami Saraswati Shishumandir, we believe that
                            education is not just about academics, but about shaping character
                            and instilling lifelong values. Our school blends traditional Indian
                            culture with modern learning practices to create well-rounded
                            individuals. With a focus on discipline, respect, and moral
                            development, we nurture students to grow into responsible and
                            confident citizens.
                        </p>


                    </div>


                </div>
            </div>

            {/* new -2 */}
            <div className="p-2 bg-white h-[550px] flex gap-25">

                {/* data */}
                <div className='flex  w-[550px] h-[400px] my-25 ml-[80px]'>
                    <div className="flex flex-col gap-2">
                        <span className="inline-block text-[20px] font-semibold text-[#F0942A]  py-3  w-fit">
                            Our Infrastructure
                        </span>


                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                            A Campus Designed for Growth and Learning
                        </h2>


                        <p className="text-gray-600 leading-loose min-w-2.5 ">
                            It offers a safe, clean, and student-friendly campus that
                            encourages both academic and personal development. Our
                            classrooms are well-ventilated and equipped for interactive
                            learning. We have dedicated spaces for physical activities,
                            cultural programs, and meditation. The school environment
                            reflects simplicity, discipline, and a deep connection with Indian
                            values.
                        </p>
                    </div>
                </div>

                {/* image */}
                <div className="p-8  flex items-center justify-center">
                    <div className=" p-6 rounded-lg  max-w-4xl w-full">
                        <div className="grid grid-cols-3 gap-4 h-[400px]">
                            {/* Row 1: Image A (spans 2 columns) and Image B (1 column) */}
                            <div className="col-span-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl overflow-hidden">
                                <img
                                    src="./img1.png"
                                    alt="Image A - Main campus"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="col-span-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl overflow-hidden">
                                <img
                                    src="./img4t.png"
                                    alt="Image B - Student"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Row 2: Images C and D (each 1 column), Empty space or Image E */}
                            <div className="col-span-1 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl overflow-hidden">
                                <img
                                    src="./img2b.png"
                                    alt="Image C - Activities"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="col-span-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl overflow-hidden">
                                <img
                                    src="./img2b2.png"
                                    alt="Image D - Facilities"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="col-span-1 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl overflow-hidden">
                                <img
                                    src="./img4b.png"
                                    alt="Image E - Classroom"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* new-3 */}
            <div className="p-2 bg-white h-[550px] flex gap-25">
                {/* image */}
                <div className="mt-20">
                    <div className="grid grid-cols-2 gap-3 w-[590px] ml-[80px]">

                        {/* Top Left */}
                        <div>
                            <img
                                src="/img1l.png"
                                alt="Top Left"
                                className="w-full h-[200px] object-cover rounded"
                            />
                        </div>

                        {/* Top Right */}
                        <div>
                            <img
                                src="/img1r.png"
                                alt="Top Right"
                                className="w-full h-[200px] object-cover rounded"
                            />
                        </div>

                        {/* Bottom Left */}
                        <div>
                            <img
                                src="/img4b.png"
                                alt="Bottom Left"
                                className="w-full h-[200px] object-cover rounded"
                            />
                        </div>

                        {/* Bottom Right */}
                        <div>
                            <img
                                src="/img2r.png"
                                alt="Bottom Right"
                                className="w-full h-[200px] object-cover rounded"
                            />
                        </div>

                    </div>
                </div>

                {/* data */}
                <div className='flex  w-[550px] h-[400px] my-25 '>

                    <div className="flex flex-col gap-2">
                        <span className="inline-block text-[20px] font-semibold text-[#F0942A]  py-3  w-fit">
                            School Culture
                        </span>


                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                            A Culture Rooted in Values and Discipline
                        </h2>


                        <p className="text-gray-600 leading-loose ">
                            Our school culture is built on the principles of respect,
                            responsibility, and tradition. Students begin each day with
                            prayer and patriotic songs, fostering a sense of unity and
                            devotion. Moral education, yoga, and cultural activities are an
                            integral part of daily learning. We strive to create an
                            environment where students grow not just intellectually, but
                            spiritually and emotionally as well.
                        </p>


                    </div>


                </div>
            </div>

            {/* new-4 */}
            <div className="p-2 bg-white h-[550px] flex gap-25">

                {/* data */}
                <div className='flex  w-[550px] h-[400px] my-25 ml-[80px]'>
                    <div className="flex flex-col gap-2">
                        <span className="inline-block text-[20px] font-semibold text-[#F0942A]  py-3  w-fit">
                            Co-Curricular
                        </span>


                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                            Nurturing Talents Beyond the Classroom
                        </h2>


                        <p className="text-gray-600 leading-loose min-w-2.5 ">
                            Co-curricular activities are an essential part of our holistic
                            education approach. From music, art, and dance to debates,
                            yoga, and sports students are encouraged to explore and
                            develop their individual talents. Regular competitions,
                            celebrations, and cultural events help build confidence and
                            teamwork. These activities instill creativity, discipline, and
                            leadership skills in every child.
                        </p>
                    </div>
                </div>

                {/* image */}
                <div className="p-8 flex items-center justify-center">
                    <div className="p-6 max-w-4xl w-full rounded-xl">
                        <img src={"./img.png"}
                            alt="imag 1"
                            className='w-full h-full object-cover rounded-xl' />
                    </div>
                </div>


            </div>

            {/* gallery */}
            <div className="py-17 bg-white h-[710px] ">

                <p className="w-full text-center text-[#F0942AE5] text-[18px] font-semibold">
                    Gallery
                </p>

                <p className="w-full text-center text-[#555555] text-[30px] font-semibold">
                    Life at Shishumandir – A Visual Story
                </p>

                <div className="w-full h-[501px]  my-14 mx-2.5">

                    <div
                        className="w-full h-full grid grid-rows-[244px_257px] grid-cols-[289px_310px_219px_199px_199px_232px_61px] gap-2.5"
                    >
                        {/* ROW 1 */}

                        <img src="/image2.png" className="w-[289px] h-[244px] object-cover rounded-lg" />

                        {/* Image 3 – spans 2 rows */}
                        <img
                            src="/image1.png"
                            className="row-span-2 w-[310px] h-[500px] object-cover rounded-lg"
                        />

                        {/* Image 4 – spans 2 columns */}
                        <img
                            src="/img1.png"
                            className="col-span-2 w-[427px] h-[301px] object-cover rounded-lg"
                        />

                        <img src="/lab.png" className="w-[219px] h-[199px] object-cover rounded-lg" />
                        <img src="/img4b.png" className="w-[232px] h-[199px] object-cover rounded-lg" />
                        <div />


                        {/* ROW 2 */}

                        <img src="/image3.png" className="w-[289px] h-[245px] object-cover rounded-lg" />

                        {/* Image 5 */}
                        <img
                            src="/img2b.png"
                            className="col-start-3 row-start-2 w-[219px] h-[190px] object-cover rounded-[10px] mt-[55px]"
                        />

                        {/* Image 6 */}
                        <img
                            src="/img2b2.png"
                            className="col-start-4 row-start-2 w-[199px] h-[190px] object-cover rounded-[10px] mt-[55px]"
                        />

                        {/* Image 9 – spans 2 columns */}
                        <img
                            src="/img9.png"
                            className="col-start-5 col-span-2 row-start-2 w-[464px] h-[292px] object-cover rounded-[10px] -translate-y-[47px]"
                        />

                    </div>

                </div>



            </div>

            {/* enroll and query */}
            <div className="flex h-[400px] mt-20">
                {/* Left Image */}
                <div className="relative w-1/2 h-full">
                    <img
                        src="/campus1.jpg"
                        alt="Campus 1"
                        className="w-full h-full object-cover rounded-l"
                    />
                    {/* Overlay with text inside */}
                    <div
                        className="absolute inset-0 rounded-l flex flex-col items-center justify-center text-center gap-2"
                        style={{ backgroundColor: "rgba(58, 83, 164, 0.8)" }}
                    >
                        <p className="text-white font-semibold text-[18px]">Admission</p>
                        <p className="text-white font-bold text-[33px]">Enrol Now!</p>
                        <p className='text-white  text-[18px]'>
                            Admissions open! Join a school that nurtures values, learning, <br></br>
                            and growth. Secure your child’s bright future today.
                        </p>
                        <button className='rounded-full bg-[#3A53A4] text-white font-semibold px-6 py-2  '>
                            Start Your Journey
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-1/2 h-full">
                    <img
                        src="/campus2.jpg"
                        alt="Campus 2"
                        className="w-full h-full object-cover rounded-r"
                    />
                    {/* Overlay with text inside */}
                    <div
                        className="absolute inset-0 rounded-r flex flex-col items-center justify-center text-center gap-2"
                        style={{ backgroundColor: "rgba(240, 148, 42, 0.65)" }}
                    >
                        <p className="text-white font-semibold text-[18px]">Inquiry</p>
                        <p className="text-white font-bold text-[28px]">Ask Us</p>
                        <p className='text-white  text-[18px]'>
                            We’re here to help! Reach out now to know more about <br></br>
                            admissions, facilities, or anything else.
                        </p>
                        <button className='rounded-full bg-[#F0942A] text-white font-semibold px-6 py-2  '>
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;