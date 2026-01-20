import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';



function Home() {
    return (

        <div className="flex flex-col overflow-x-hidden">

            {/* HERO */}
            <section className="relative min-h-[360px] sm:min-h-[400px] md:h-[550px] w-full">
                <img
                    src="/back.jpg"
                    className="absolute inset-0 w-full h-full object-cover blur-sm"
                    alt="Background"
                />

                <div className="relative z-10 text-white px-4 sm:px-6 pb-8 sm:pb-10 h-full flex flex-col justify-end max-w-7xl mx-auto">

                    {/* Small intro text */}
                    <p className="font-ophelia text-lg sm:text-2xl md:text-3xl">
                        Welcome to
                    </p>

                    {/* Main heading */}
                    <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight mt-1 sm:mt-2">
                        Shree B.S. Goswami Saraswati
                        <br className="hidden sm:block" />
                        Shisumandir
                    </p>

                    {/* Description */}
                    <div className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-xl">
                        <p>A nurturing space for learning.</p>
                        <p>A foundation built on discipline.</p>
                        <p>Cultural values rooted in Saraswati Shishu Mandir.</p>
                    </div>

                </div>
            </section>


            {/* SECTION 1 */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">

                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                        <img src="/image2.png" className="h-40 sm:h-48 object-cover rounded" />
                        <img src="/image1.png" className="row-span-2 h-full object-cover rounded" />
                        <img src="/image3.png" className="h-40 sm:h-48 object-cover rounded" />
                    </div>

                    <div className="w-full md:w-1/2">
                        <span className="text-[#F0942A] font-semibold">Why We Are</span>
                        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                            Foundation for a Bright and Balanced Future
                        </h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            At Shree B.S. Goswami Saraswati Shishumandir, education is not just academics
                            but character building, discipline, and values.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION 2 */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-10 items-center">

                    <div className="w-full md:w-1/2">
                        <span className="text-[#F0942A] font-semibold">Our Infrastructure</span>
                        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                            A Campus Designed for Growth and Learning
                        </h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Our campus offers safe, clean, and student-friendly spaces that
                            encourage academic and personal growth.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <img src="./img1.png" className="col-span-2 h-48 object-cover rounded-xl" />
                        <img src="./img4t.png" className="h-48 object-cover rounded-xl" />
                        <img src="./img2b.png" className="h-40 object-cover rounded-xl" />
                        <img src="./img2b2.png" className="h-40 object-cover rounded-xl" />
                        <img src="./img4b.png" className="h-40 object-cover rounded-xl" />
                    </div>

                </div>
            </section>

            {/* SECTION 3 */}
            {/* GALLERY SECTION */}
            <section className="bg-white py-12">
                {/* Section Titles */}
                <p className="text-center text-[#F0942A] font-semibold text-sm sm:text-base">
                    Gallery
                </p>
                <p className="text-center text-[#555555] font-semibold text-xl sm:text-2xl md:text-3xl mt-1">
                    Life at Shishumandir – A Visual Story
                </p>

                {/* Gallery Grid Container */}
                <div className="max-w-7xl mx-auto px-4 mt-8 overflow-x-auto">
                    <div className="w-full min-w-[800px] h-auto grid grid-rows-[244px_257px] grid-cols-[289px_310px_219px_199px_199px_232px_61px] gap-2.5">

                        {/* ROW 1 */}
                        <img src="/image2.png" className="w-[289px] h-[244px] object-cover rounded-lg" />
                        <img src="/image1.png" className="row-span-2 w-[310px] h-[500px] object-cover rounded-lg" />
                        <img src="/img1.png" className="col-span-2 w-[427px] h-[301px] object-cover rounded-lg" />
                        <img src="/lab.png" className="w-[219px] h-[199px] object-cover rounded-lg" />
                        <img src="/img4b.png" className="w-[232px] h-[199px] object-cover rounded-lg" />
                        <div />

                        {/* ROW 2 */}
                        <img src="/image3.png" className="w-[289px] h-[245px] object-cover rounded-lg" />
                        <img src="/img2b.png" className="col-start-3 row-start-2 w-[219px] h-[190px] object-cover rounded-lg mt-[55px]" />
                        <img src="/img2b2.png" className="col-start-4 row-start-2 w-[199px] h-[190px] object-cover rounded-lg mt-[55px]" />
                        <img src="/img9.png" className="col-start-5 col-span-2 row-start-2 w-[464px] h-[292px] object-cover rounded-lg -translate-y-[47px]" />

                    </div>
                </div>
            </section>


            {/* ENROLL & QUERY */}
            <section className="flex flex-col md:flex-row mt-10">
                {[{
                    img: "/campus1.jpg",
                    title: "Admission",
                    heading: "Enrol Now!",
                    color: "rgba(58,83,164,0.8)",
                    btn: "bg-[#3A53A4]"
                }, {
                    img: "/campus2.jpg",
                    title: "Inquiry",
                    heading: "Ask Us",
                    color: "rgba(240,148,42,0.7)",
                    btn: "bg-[#F0942A]"
                }].map((item, i) => (
                    <div key={i} className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                        <img src={item.img} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
                            style={{ backgroundColor: item.color }}>
                            <p className="font-semibold">{item.title}</p>
                            <p className="font-bold text-2xl sm:text-3xl">{item.heading}</p>
                            <button className={`mt-4 px-6 py-2 rounded-full ${item.btn}`}>
                                Start Your Journey
                            </button>
                        </div>
                    </div>
                ))}
            </section>

        </div>

    )
}

export default Home;