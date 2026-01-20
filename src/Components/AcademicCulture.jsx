import React from 'react'

function AcademicCulture() {

  const staffMembers = [
    { id: 1, name: "Sanjay Varma", role: "Principle", image: "/image1.png" },
    { id: 2, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 3, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 4, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 5, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
  ];
  
  return (
    <div className="w-full">

      {/* slide-1: Academic Culture */}
      <div className='w-full flex flex-col items-center px-4'>
        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Academic Culture</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Rooted in Knowledge, Guided by Values
          </span>
        </div>

        <div className="w-full max-w-[1351px] h-auto mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6">

          {/* Top Row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[549px] h-auto bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl p-6 transition-shadow">
              <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                💡
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Concept-Based Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We promote a culture of academic excellence with focus, discipline, and curiosity. Every student is encouraged to think critically and learn deeply.
              </p>
            </div>

            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[321px] h-auto bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl p-6 transition-shadow">
              <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                🎯
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Thinking Focus</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our academic culture balances traditional wisdom with modern learning methods. We aim for well-rounded development.
              </p>
            </div>

            <div className="w-full sm:w-full lg:w-[438px] h-auto bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl p-6 transition-shadow">
              <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                🔧
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Value-Based Academics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Education here is rooted in values, discipline, and respect. Academic lessons are enriched with cultural understanding and ethical thinking.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[321px] h-auto bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl p-6 transition-shadow">
              <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                🎯
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Student-Centered</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We place each student at the center of the learning journey. Our approach encourages curiosity, creativity, and more.
              </p>
            </div>

            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[438px] h-auto bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl p-6 transition-shadow">
              <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                🔧
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Continuous Improvement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our academic environment thrives on constant progress and reflection. We encourage both students and teachers to evolve and grow.
              </p>
            </div>

            <div className="w-full sm:w-full lg:w-[549px] h-auto bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl p-6 transition-shadow">
              <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                💡
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Collaborative Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We foster a spirit of teamwork, peer learning, and open discussion. Group activities and interactive lessons strengthen understanding.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* slide-2: Academic Achievements */}
      <div className='w-full flex flex-col items-center mt-12 px-4'>
        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Academic Achievements</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Shining Bright with Scholarly Accomplishments
          </span>
        </div>

        <div className='w-full max-w-[1351px] flex flex-col lg:flex-row justify-center lg:justify-between mt-6 sm:mt-8 gap-4 lg:gap-6'>

          {/* Left Column */}
          <div className='flex flex-col items-center gap-4 w-full lg:w-[666px]'>
            <div className="w-full bg-[#F8F8F8] rounded-2xl sm:rounded-3xl border border-[#F0942A] p-5 sm:p-6">
              <span className='text-[#F0942A] text-lg sm:text-xl md:text-[24px] font-bold block'>
                "95% students scored above 85% in board exams."
              </span>
              <p className='text-gray-600 text-sm sm:text-base md:text-[17px] mt-3 leading-relaxed'>
                Our students consistently excel in academics, earning top ranks and honors. We take pride in nurturing achievers through dedication and quality teaching.
              </p>
            </div>
            <div className="w-full bg-[#F8F8F8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center">
              <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>"Winners of National Science Olympiad."</span>
            </div>
            <div className="w-full bg-[#F8F8F8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center">
              <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>"Champions of Inter-School Quiz Contest."</span>
            </div>
          </div>

          {/* Right Column */}
          <div className='w-full lg:w-[665px] flex justify-center'>
            <img src="./students.png" alt="students" className='w-full h-auto rounded-2xl sm:rounded-3xl object-cover' />
          </div>

        </div>
      </div>

      {/* slide-5: Principal Message */}
      <div className='w-full flex flex-col items-center mt-12 gap-6 sm:gap-8 px-4'>
        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Principal's Message</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            A Word from Our Principal
          </span>
        </div>

        <div className='w-full max-w-[1352px] flex flex-col lg:flex-row justify-center gap-4 lg:gap-6'>

          <img
            src="./principle.png"
            alt="principal"
            className='w-full sm:w-[80%] md:w-[60%] lg:w-[360px] h-auto rounded-2xl sm:rounded-3xl mx-auto lg:mx-0 object-cover'
          />

          <div className="w-full lg:w-[972px] rounded-2xl sm:rounded-3xl bg-[#F8F8F8] relative p-6 sm:p-8 md:p-10">
            <span className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[#F0942A] text-3xl sm:text-[40px]">"</span>
            <p className="text-gray-600 text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 mt-12 sm:mt-14 md:mt-16 text-center lg:text-left px-2">
              At Shree B.S. Goswami Saraswati Shishumandir, we believe education is a journey of the mind, heart, and soul.
              <br className="hidden sm:block" />
              Our aim is to nurture students with knowledge, discipline, and strong cultural values.
              <br className="hidden sm:block" />
              We focus on holistic growth—academics, character, and creativity.
              <br className="hidden sm:block" />
              Together, let's build a generation that is rooted in tradition and ready for the future.
            </p>
            <span className="absolute bottom-12 sm:bottom-14 right-6 sm:right-8 text-[#F0942A] text-3xl sm:text-[40px] font-bold">"</span>
            <span className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-sm sm:text-base md:text-[18px] font-semibold text-[#555]">
              – Viram Chaudhari
            </span>
          </div>

        </div>
      </div>

    </div>
  )

}

export default AcademicCulture