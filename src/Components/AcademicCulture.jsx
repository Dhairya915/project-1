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
    <div>

      {/* slide-1 */}
      <div className='w-full h-[928px] flex items-center flex-col'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Academic Culture</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Rooted in Knowledge, Guided by Values</span>
        </div>

        <div className="w-[1351px] h-[608px] mt-[86px]  flex flex-col gap-6">

          <div className="flex flex-col gap-7.25">

            {/* Top Row */}
            <div className="flex gap-2 justify-between flex-wrap">
              <div className="w-[549px] h-[289px] bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                  💡
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Concept-Based Learning</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We promote a culture of academic excellence with focus, discipline, and curiosity. Every student is encouraged to think critically and learn deeply. Our classrooms are centers of active engagement and grow.
                </p>
              </div>

              <div className="w-[321px] h-[289px] bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                  🎯
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Thinking Focus</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our academic culture balances traditional wisdom with modern learning methods. We aim for well-rounded development.
                </p>
              </div>

              <div className="w-[438px] h-[289px] bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl transition-shadow p-6">
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
            <div className="flex gap-2 justify-between flex-wrap">
              <div className="w-[321px] h-[289px] bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                  🎯
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Student-Centered</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We place each student at the center of the learning journey. Our approach encourages curiosity, creativity, and more.
                </p>
              </div>

              <div className="w-[438px] h-[289px] bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="w-[66px] h-[66px] bg-white rounded-full flex items-center justify-center mb-5 text-4xl">
                  🔧
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Continuous Improvement</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our academic environment thrives on constant progress and reflection. We encourage both students and teachers to evolve and grow.
                </p>
              </div>

              <div className="w-[549px] h-[289px] bg-[#F8F8F8] rounded-[20px] shadow-md hover:shadow-xl transition-shadow p-6">
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

      {/* principle message slide-5 */}
      <div className='w-full h-[717px] items-center flex flex-col'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Principle’s Message</span>
          <span className='text-[30px] text-[#555555] font-semibold'>A Word from Our Principal</span>
        </div>

        <div className='w-[1352px] h-[360px] flex flex-row gap-5  mt-22'>

          <img src="./principle.png" alt="picture of principle" className='w-[360px] h-[360px] rounded-3xl' />

          <div className="w-[972px] h-[360px] rounded-3xl bg-[#F8F8F8]  relative p-10">

            {/* Opening quote */}
            <span className="absolute top-12 left-12 text-[#F0942A] text-[40px] ">
              “
            </span>

            {/* Quote content */}
            <div className="w-[856px] mx-auto mt-6">
              <p className="text-[16px] leading-7 text-[#8D8D8D] font-medium text-center">
                At Shree B.S. Goswami Saraswati Shishumandir, we believe education is a journey of the
                mind, heart, and soul.
                <br></br>
                Our aim is to nurture students with knowledge, discipline, and strong cultural values.
                <br />
                We focus on holistic growth—academics, character, and creativity.
                <br />
                Together, let's build a generation that is rooted in tradition and ready for the future.
              </p>
            </div>

            {/* Closing quote */}
            <span className="absolute bottom-41 right-34 text-[#F0942A] text-[40px] font-bold">
              ”
            </span>

            {/* Author */}
            <span className="absolute bottom-20 right-10 text-[18px] font-semibold text-[#555]">
              – Viram Chaudhari
            </span>

          </div>


        </div>

      </div>

      {/* faculty slide-6 */}
      <div className='w-full h-[934px] items-center flex flex-col'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Our Team</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Lorem ipsum dolor sit amet, consectetur elit.</span>
        </div>

        <div className="w-[1267px] h-[282px] flex justify-between mt-18">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="w-[223px] h-[282px] flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-[180px] h-[180px] rounded-full border-4 border-[#3A53A4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-[20px] font-semibold text-[#555555]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#3A53A4] text-[18px] font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="w-[1267px] h-[282px] flex justify-between mt-15">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="w-[223px] h-[282px] flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-[180px] h-[180px] rounded-full border-4 border-[#3A53A4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 font-semibold text-gray-700">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-blue-600 text-sm font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* gallery slide-7 */}
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

      {/* enroll and query slide-8*/}
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

export default AcademicCulture