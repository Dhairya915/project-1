import React from 'react'

function Gallery() {
  const galleryItems = [
    { img: "/image3.png", title: "Campus", num: "01" },
    { img: "/sport.png", title: "Sports", num: "02" },
    { img: "/img1r.png", title: "Activities", num: "03" },
    { img: "/img4t.png", title: "Creativity", num: "04" },
    { img: "/image3.png", title: "Campus", num: "05" },
    { img: "/sport.png", title: "Sports", num: "06" },
    { img: "/img1r.png", title: "Activities", num: "07" },
    { img: "/img4t.png", title: "Creativity", num: "08" },
    { img: "/image3.png", title: "Campus", num: "09" },
    { img: "/sport.png", title: "Sports", num: "10" },
    { img: "/img1r.png", title: "Activities", num: "11" },
    { img: "/img4t.png", title: "Creativity", num: "12" },
    { img: "/image3.png", title: "Campus", num: "13" },
    { img: "/sport.png", title: "Sports", num: "14" },
    { img: "/img1r.png", title: "Activities", num: "15" },
    { img: "/img4t.png", title: "Creativity", num: "16" },
  ];

  return (
    <div className='w-full'>

      <div className='w-full min-h-[1512px] h-auto px-4 py-8'>

        <div className='w-full h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Gallery</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold'>"Captured Memories"</span>
        </div>

        {/* Gallery Grid */}
        <div className="w-full max-w-[1352px] mx-auto mt-8 sm:mt-12 md:mt-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="
                     relative w-full 
                      h-[220px]        /* mobile */
                      sm:h-[260px]     /* tablet */
                      md:h-[300px]     /* small laptop */
                      lg:h-[320px]     /* desktop */
                      rounded-xl overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Text overlays */}
                <h3 className="
                    absolute bottom-3 left-3 
                    text-lg sm:text-xl md:text-[26px]
                  text-white font-bold drop-shadow-lg
                  ">
                  {item.title}
                </h3>

                <p className="
                     absolute bottom-2 right-3 
                     text-2xl sm:text-4xl md:text-[50px]
                     text-white font-semibold drop-shadow-lg
                   ">
                  {item.num}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* enroll and query */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[400px] mt-8 sm:mt-12 md:mt-20">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-full">
          <img
            src="/campus1.jpg"
            alt="Campus 1"
            className="w-full h-full object-cover lg:rounded-l"
          />
          <div
            className="absolute inset-0 lg:rounded-l flex flex-col items-center justify-center text-center gap-3 sm:gap-4 px-4"
            style={{ backgroundColor: "rgba(58, 83, 164, 0.8)" }}
          >
            <p className="text-white font-semibold text-base sm:text-lg md:text-[18px]">Admission</p>
            <p className="text-white font-bold text-2xl sm:text-3xl md:text-[33px]">Enrol Now!</p>
            <p className='text-white text-sm sm:text-base md:text-[18px] max-w-[90%] sm:max-w-none'>
              Admissions open! Join a school that nurtures values, learning,<br className="hidden sm:block" />
              and growth. Secure your child's bright future today.
            </p>
            <button className='rounded-full bg-[#3A53A4] text-white font-semibold px-6 py-2 hover:bg-[#2d4283] transition-colors'>
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-full">
          <img
            src="/campus2.jpg"
            alt="Campus 2"
            className="w-full h-full object-cover lg:rounded-r"
          />
          <div
            className="absolute inset-0 lg:rounded-r flex flex-col items-center justify-center text-center gap-3 sm:gap-4 px-4"
            style={{ backgroundColor: "rgba(240, 148, 42, 0.65)" }}
          >
            <p className="text-white font-semibold text-base sm:text-lg md:text-[18px]">Inquiry</p>
            <p className="text-white font-bold text-2xl sm:text-3xl md:text-[28px]">Ask Us</p>
            <p className='text-white text-sm sm:text-base md:text-[18px] max-w-[90%] sm:max-w-none'>
              We're here to help! Reach out now to know more about<br className="hidden sm:block" />
              admissions, facilities, or anything else.
            </p>
            <button className='rounded-full bg-[#F0942A] text-white font-semibold px-6 py-2 hover:bg-[#d97f1e] transition-colors'>
              Start Your Journey
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Gallery



