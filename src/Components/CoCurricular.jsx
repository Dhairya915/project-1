import React from 'react'

function CoCurricular() {

  return (
    <div className='w-full'>

      {/* slide-1 */}
      <div className='w-full min-h-[900px] h-auto flex flex-col items-center px-4 py-8'>

        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Co-Curricular</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Shaping Students Through Co-Curriculars
          </span>
        </div>

        <div className='w-full max-w-[1359px] h-auto mt-8 sm:mt-12 md:mt-[66px] flex flex-col gap-4 sm:gap-5'>

          {/* top div */}
          <div className='flex flex-col lg:flex-row gap-4 sm:gap-5'>

            {/* left part - Performing Arts with Image */}
            <div className="w-full lg:w-[892px] h-auto bg-[#F8F8F8] flex flex-col sm:flex-row items-center rounded-2xl overflow-hidden">

              {/* White D-shape */}
              <div className="w-full sm:w-[320px] h-[250px] sm:h-[300px] bg-white sm:rounded-r-full flex items-center justify-center sm:justify-start">
                <div className="w-full sm:w-[290px] h-full overflow-hidden sm:rounded-r-full">
                  <img
                    src="/dance.png"
                    alt="Dance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right content */}
              <div className="w-full sm:flex-1 h-auto p-6 sm:pl-12 flex flex-col">
                <div className='w-full'>
                  <span className='text-xl sm:text-2xl md:text-[26px] font-semibold text-[#555555]'>Performing Arts</span>
                </div>
                <div className='mt-4 sm:mt-7'>
                  <span className='text-base sm:text-lg md:text-[18px] font-medium'>Music, Dance, Drama</span>
                </div>
                <div className='w-full mt-3 sm:mt-4'>
                  <span className='text-sm sm:text-base md:text-[17px] text-[#8D8D8D] font-medium'>
                    Performing arts are a vital part of our students' creative growth. Through music, dance, and drama, they express emotions, culture, and ideas. These activities build confidence, teamwork, and stage presence.
                  </span>
                </div>
              </div>

            </div>

            {/* right part - Visual Arts */}
            <div className='w-full lg:w-[447px] h-auto bg-[#F8F8F8] flex flex-col rounded-2xl p-6'>
              <div className='w-full'>
                <span className='text-xl sm:text-2xl md:text-[26px] font-semibold text-[#555555]'>Visual Arts</span>
              </div>
              <div className='mt-4 sm:mt-7'>
                <span className='text-base sm:text-lg md:text-[18px] font-medium'>Drawing, Craft, Pottery</span>
              </div>
              <div className='w-full mt-3 sm:mt-4'>
                <span className='text-sm sm:text-base md:text-[17px] text-[#8D8D8D] font-medium'>
                  Visual arts inspire imagination, observation, and self-expression. Students explore creativity through drawing, painting, and craft.
                </span>
              </div>
            </div>
          </div>

          {/* bottom div */}
          <div className='flex flex-col lg:flex-row gap-4 sm:gap-5'>

            {/* left part - Clubs */}
            <div className='w-full lg:w-[457px] h-auto bg-[#F8F8F8] flex flex-col rounded-2xl p-6'>
              <div className='w-full'>
                <span className='text-xl sm:text-2xl md:text-[26px] font-semibold text-[#555555]'>Clubs & Competitions</span>
              </div>
              <div className='mt-4 sm:mt-7'>
                <span className='text-base sm:text-lg md:text-[18px] font-medium'>Quiz, Debate, Coding</span>
              </div>
              <div className='w-full mt-3 sm:mt-4'>
                <span className='text-sm sm:text-base md:text-[17px] text-[#8D8D8D] font-medium'>
                  This help students discover their interests and sharpen their skills. From science to debate, every activity encourages healthy participation and teamwork.
                </span>
              </div>
            </div>

            {/* right part - Sports with Image (reversed) */}
            <div className="w-full lg:w-[892px] h-auto bg-[#F8F8F8] flex flex-col-reverse sm:flex-row items-center rounded-2xl overflow-hidden">

              {/* Left content */}
              <div className="w-full sm:flex-1 h-auto p-6 sm:pr-12 flex flex-col">
                <div className='w-full'>
                  <span className='text-xl sm:text-2xl md:text-[26px] font-semibold text-[#555555]'>Sports</span>
                </div>
                <div className='mt-4 sm:mt-7'>
                  <span className='text-base sm:text-lg md:text-[18px] font-medium'>Football, Cricket, Athletics</span>
                </div>
                <div className='w-full mt-3 sm:mt-4'>
                  <span className='text-sm sm:text-base md:text-[17px] text-[#8D8D8D] font-medium'>
                    Sports are essential for physical fitness and mental well-being. Through team games and individual sports, students learn discipline, perseverance, and sportsmanship.
                  </span>
                </div>
              </div>

              {/* White D-shape (reversed) */}
              <div className="w-full sm:w-[320px] h-[250px] sm:h-[300px] bg-white sm:rounded-l-full flex items-center justify-center sm:justify-end">
                <div className="w-full sm:w-[290px] h-full overflow-hidden sm:rounded-l-full bg-white">
                  <img
                    src="/dance.png"
                    alt="Sports"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* slide-2: Academic Achievements */}
      <div className='w-full min-h-[770px] h-auto flex flex-col items-center px-4 py-8'>

        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Academic Achievements</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Shining Bright with Scholarly Accomplishments
          </span>
        </div>

        <div className='w-full max-w-[1351px] flex flex-col lg:flex-row justify-center lg:justify-between mt-8 sm:mt-12 md:mt-22 gap-4 lg:gap-5'>

          {/* Left Column */}
          <div className='flex flex-col items-center gap-4 w-full lg:w-[666px]'>
            <div className="w-full h-auto bg-[#F8F8F8] rounded-2xl sm:rounded-3xl border border-[#F0942A] p-5 sm:p-6">
              <span className='text-[#F0942A] text-lg sm:text-xl md:text-[24px] font-bold block'>
                "95% students scored above 85% in board exams."
              </span>
              <p className='text-gray-600 text-sm sm:text-base md:text-[17px] mt-3 sm:mt-4 leading-relaxed'>
                Our students consistently excel in academics, earning top ranks and honors. We take pride in nurturing achievers through dedication and quality teaching.
              </p>
            </div>
            <div className='w-full h-auto min-h-[99px] rounded-2xl sm:rounded-3xl flex items-center p-5 sm:p-8 bg-[#F8F8F8]'>
              <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>"Winners of National Science Olympiad."</span>
            </div>
            <div className='w-full h-auto min-h-[99px] rounded-2xl sm:rounded-3xl flex items-center p-5 sm:p-8 bg-[#F8F8F8]'>
              <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>"Champions of Inter-School Quiz Contest."</span>
            </div>
          </div>

          {/* Right Column */}
          <div className='w-full lg:w-[665px] flex justify-center'>
            <img src="./students.png" alt="students" className='w-full h-auto rounded-2xl sm:rounded-3xl object-cover' />
          </div>

        </div>

      </div>

      {/* gallery */}
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

export default CoCurricular

