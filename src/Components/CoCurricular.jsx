import React from 'react'

function CoCurricular() {

  return (
    <div>

      {/* slide-1 */}
      <div className='w-full h-[900px] flex flex-col items-center '>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Co-Curricular</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Shaping Students Through Co-Curriculars</span>
        </div>

        <div className='relative h-[620px] w-[1359px]  mt-[66px] gap-[20px] flex flex-col  '>

          {/* top div */}
          <div className='flex flex-row gap-[20px] '>

            {/* left part */}
            <div className="w-[892px] h-[300px] bg-[#F8F8F8]  flex items-center rounded-2xl ">

              {/* White D-shape (slightly thinner) */}
              <div className="w-[320px] h-[300px] bg-white rounded-r-full flex items-center">

                {/* Image (almost fills D) */}
                <div className="w-[290px] h-full overflow-hidden rounded-r-full">
                  <img
                    src="/dance.png"
                    alt="Dance"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

              {/* symbol */}
              <div className='absolute top-[9.05px] left-[335.96px] text-[#FFBB02] text-[47px]'>✦</div>

              {/* Right content */}
              <div className=" w-[484px] h-[217px]  rounded-lg flex flex-col ml-[50px]">
                <div className='w-[217px]'>
                  <span className='text-[26px] font-semibold text-[#555555]'>Performing Arts</span>
                </div>
                <div className='mt-[28px]'>
                  <span className='text-[18px] font-medium flex items-center'>Music, Dance, Drama</span>
                </div>
                <div className='w-[484px] h-[119px] flex items-center'>
                  <span className=' text-[#8D8D8D] text-[17px] font-medium'>Performing arts are a vital part of our students’ creative growth.Through music, dance, and drama, they express emotions, culture, and ideas.These activities build confidence, teamwork, and stage presence.</span>
                </div>
              </div>

            </div>

            {/* right part */}
            <div className='w-[447px] h-[300px] bg-[#F8F8F8] flex flex-col rounded-2xl  justify-center pl-[13px]'>
              <div className='w-[217px]'>
                <span className='text-[26px] font-semibold text-[#555555]'>Visual Arts</span>
              </div>
              <div className='mt-[28px]'>
                <span className='text-[18px] font-medium flex items-center'>Drawing, Craft, Pottery</span>
              </div>
              <div className='w-[484px] h-[119px] flex items-center'>
                <span className=' text-[#8D8D8D] text-[17px] font-medium'>Visual arts inspire imagination, observation, and self-expression.Students explore creativity through drawing, painting, and craft.</span>
              </div>
            </div>
          </div>

          {/* bottom div */}
          <div className='flex flex-row gap-[20px] '>

            {/* left part */}
            <div className='w-[457px] h-[300px] bg-[#F8F8F8] flex flex-col rounded-2xl  justify-center pl-[13px]'>
              <div className='w-[280px]'>
                <span className='text-[26px] font-semibold text-[#555555]'>Clubs & Competitions</span>
              </div>
              <div className='mt-[28px]'>
                <span className='text-[18px] font-medium flex items-center'>Quiz, Debate, Coding</span>
              </div>
              <div className='w-[447px] h-[121px] flex items-center '>
                <span className=' text-[#8D8D8D] text-[17px] font-medium'>This help students discover their interests and sharpen their skills.From science to debate, every activity encourages healthy participation and teamwork.</span>
              </div>
            </div>

            {/* right part */}
            <div className="w-[892px] h-[300px] bg-[#F8F8F8] flex items-center rounded-2xl justify-end relative">

              {/* Left content */}
              <div className=" w-[484px] h-[217px] rounded-lg flex flex-col mr-[50px] ">
                <div className='w-[217px]'>
                  <span className='text-[26px] font-semibold text-[#555555]'>Performing Arts</span>
                </div>
                <div className='mt-[28px]'>
                  <span className='text-[18px] font-medium flex items-center'>Music, Dance, Drama</span>
                </div>
                <div className='w-[484px] h-[119px] flex items-center'>
                  <span className=' text-[#8D8D8D] text-[17px] font-medium'>
                    Performing arts are a vital part of our students’ creative growth. Through music, dance, and drama, they express emotions, culture, and ideas. These activities build confidence, teamwork, and stage presence.
                  </span>
                </div>
              </div>

              {/* White D-shape (reversed) on right with only left border */}
              <div className="w-[330px] h-[300px] mr-0 pr-0 rounded-l-full flex  border-l-30 border-white ">
                {/* Image (fills D, no border on right) */}
                <div className="w-[310px] h-full overflow-hidden rounded-l-full">
                  <img
                    src="/dance.png"
                    alt="Dance"
                    className="w-full h-full object-cover border-0"
                  />
                </div>
              </div>

            </div>




          </div>

        </div>

      </div>

      {/* slide-2 */}
      <div className='w-full h-[770px] flex  flex-col items-center'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Academic Achievements</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Shining Bright with Scholarly Accomplishments</span>
        </div>

        <div className='w-[1351px] h-[476px] flex flex-row justify-between  gap-5 mt-22'>

          <div className='flex flex-col items-center justify-between '>

            <div className="w-[666px] h-[250px] rounded-3xl flex flex-col border border-[#F0942A] bg-[#F8F8F8] gap-[14px]">
              <div className='m-[25px] '>
                <span className='text-[#F0942A] text-[24px] font-bold'>
                  “95% students scored above 85% in board <br></br>exams.”
                </span>
              </div>
              <div className='mx-[25px] h-[89px] '>
                <span className='text-[17px] font-medium text-[#8D8D8D]'>Our students consistently excel in academics, earning top ranks and honors. We take pride in nurturing achievers through dedication and quality teaching.</span>
              </div>
            </div>

            <div className='w-[666px] h-[99px] rounded-3xl flex items-center p-8 bg-[#F8F8F8]'>
              <span className='text-[22px] font-semibold text-[#555555] '>“Winners of National Science Olympiad.”</span>
            </div>

            <div className='w-[666px] h-[99px] rounded-3xl flex items-center p-8 bg-[#F8F8F8]'>
              <span className='text-[22px] font-semibold text-[#555555]'>“Champions of Inter-School Quiz Contest.”</span>
            </div>

          </div>

          <div>
            <img src="./students.png" alt="students" className='w-[665px] h-[476px] rounded-3xl' />
          </div>

        </div>

      </div>

      {/* gallery */}
      <div className="py-17 bg-white h-[550px] ">
        <p className="w-full text-center text-[#F0942AE5] text-[18px] font-semibold">
          Gallery
        </p>

        <p className="w-full text-center text-[#555555] text-[30px] font-semibold">
          Life at Shishumandir – A Visual Story
        </p>

        <div className="w-full  p-5">
          {/* Grid container */}
          <div className="grid grid-cols-5 gap-4 max-w-[1200px] mx-auto">

            {/* Row 1 */}
            <div className="flex justify-center">
              <img src="/image1.png" alt="Image 1" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/image2.png" alt="Image 2" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/image3.png" alt="Image 3" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/img1.png" alt="Image 4" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/img2b.png" alt="Image 5" className="h-[200px] object-cover rounded" />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center">
              <img src="/img2b2.png" alt="Image 6" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/img1r.png" alt="Image 7" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/img1l.png" alt="Image 8" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/img2r.png" alt="Image 9" className="h-[200px] object-cover rounded" />
            </div>
            <div className="flex justify-center">
              <img src="/img2b.png" alt="Image 10" className="h-[200px] object-cover rounded" />
            </div>

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

export default CoCurricular