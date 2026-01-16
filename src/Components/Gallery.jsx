import React from 'react'

function Gallery() {
  return (

    <div>
      
      <div className='w-[1512px] h-[1512px]'>

        <div className='w-full h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Gallery</span>
          <span className='text-[30px] text-[#555555] font-semibold'>“Captured Memories”</span>
        </div>

        <div className="w-[1352px] h-[323px] flex gap-5 ml-[80px] mt-[60px]">

          {/* Image 1 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/image3.png"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            {/* Text overlays */}
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold text-lg">
              Campus
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold text-lg">
              01
            </p>
          </div>

          {/* Image 2 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/sport.png"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold text-lg">
              Sports
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold text-lg">
              02
            </p>
          </div>

          {/* Image 3 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img1r.png"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold text-lg">
              Activities
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold text-lg">
              03
            </p>
          </div>

          {/* Image 4 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img4t.png"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-white text-[28px] font-bold text-lg">
              Creativity
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold text-lg">
              04
            </p>
          </div>

        </div>

        <div className="w-[1352px] h-[323px] flex gap-5 ml-[80px] mt-[20px]">

          {/* Image 1 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/image3.png"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            {/* Text overlays */}
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Campus
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              05
            </p>
          </div>

          {/* Image 2 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/sport.png"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Sports
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              06
            </p>
          </div>

          {/* Image 3 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img1r.png"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Activities
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              07
            </p>
          </div>

          {/* Image 4 */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img4t.png"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Creativity
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              08
            </p>
          </div>

        </div>

        <div className="w-[1352px] h-[323px] flex gap-5 ml-[80px] mt-[20px]">

          {/* Image 1 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/image3.png"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Campus
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              09
            </p>
          </div>

          {/* Image 2 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/sport.png"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Sports
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              10
            </p>
          </div>

          {/* Image 3 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img1r.png"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Activities
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              11
            </p>
          </div>

          {/* Image 4 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img4t.png"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Creativity
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              12
            </p>
          </div>

        </div>

        <div className="w-[1352px] h-[323px] flex gap-5 ml-[80px] mt-[20px]">

          {/* Image 1 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/image3.png"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Campus
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              13
            </p>
          </div>

          {/* Image 2 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/sport.png"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Sports
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              14
            </p>
          </div>

          {/* Image 3 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img1r.png"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Activities
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              15
            </p>
          </div>

          {/* Image 4 again */}
          <div className="relative w-[323px] h-[323px] rounded-xl overflow-hidden">
            <img
              src="/img4t.png"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <h3 className="absolute top-[263px] left-[18px] w-[159px] h-[45px] text-[28px] text-white font-bold">
              Creativity
            </h3>
            <p className="absolute top-[236px] left-[224px] w-[79px] h-[50px] text-[60px] text-white font-semibold">
              16
            </p>
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

export default Gallery