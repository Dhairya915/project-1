import React from 'react'

function SchoolCulture() {

  const staffMembers = [
    { id: 1, name: "Sanjay Varma", role: "Principle", image: "/image1.png" },
    { id: 2, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 3, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 4, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 5, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
  ];

  return (

    <div className='w-full'>

      {/* SchoolCulture */}
      <div className='w-full min-h-[750px] h-auto items-center flex flex-col px-4 py-8'>

        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>School Culture</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            A School Culture Rooted in Values and Growth
          </span>
        </div>

        <div className='w-full max-w-[1346px] h-auto mt-8 sm:mt-12 md:mt-16.5 flex flex-col lg:flex-row justify-between gap-4'>

          {/* first */}
          <div className='w-full sm:w-[calc(50%-8px)] lg:w-[320px] h-auto bg-[#F8F8F8] rounded-3xl flex flex-col items-center gap-3 p-2'>
            <img src="./class-1.png" alt="class 1 image" className='w-full max-w-[302px] h-auto aspect-[302/192] rounded-3xl object-cover' />
            <div className='w-full max-w-[282px] h-auto flex items-center px-4'>
              <span className='text-xl sm:text-2xl md:text-[25px] text-[#555555] font-semibold'>Respect</span>
            </div>
            <div className='w-full max-w-[274px] h-auto flex items-center px-4 pb-4'>
              <span className='text-base sm:text-lg md:text-[20px] text-[#555555] font-medium'>
                Our students begin each day with prayer, fostering inner calm and unity. Discipline is not imposed but instilled through routine and responsibility.
              </span>
            </div>
          </div>

          {/* two */}
          <div className='w-full sm:w-[calc(50%-8px)] lg:w-[320px] h-auto bg-[#F8F8F8] rounded-3xl flex flex-col items-center gap-3 p-2'>
            <img src="./class-2.png" alt="class 2 image" className='w-full max-w-[302px] h-auto aspect-[302/192] rounded-3xl object-cover' />
            <div className='w-full max-w-[282px] h-auto flex items-center px-4'>
              <span className='text-xl sm:text-2xl md:text-[25px] text-[#555555] font-semibold'>Curiosity</span>
            </div>
            <div className='w-full max-w-[274px] h-auto flex items-center px-4 pb-4'>
              <span className='text-base sm:text-lg md:text-[20px] text-[#555555] font-medium'>
                At our school, we encourage students to ask questions, explore ideas, and think beyond textbooks. Curiosity is the first step toward lifelong learning.
              </span>
            </div>
          </div>

          {/* three */}
          <div className='w-full sm:w-[calc(50%-8px)] lg:w-[320px] h-auto rounded-3xl flex flex-col justify-between gap-4'>
            {/* three-A */}
            <div className='w-full h-auto bg-[#F8F8F8] rounded-3xl flex flex-col p-6'>
              <div className='w-full h-auto'>
                <span className='text-xl sm:text-2xl md:text-[25px] text-[#555555] font-semibold'>Empathy</span>
              </div>
              <div className='w-full h-auto mt-2.5'>
                <span className='text-base sm:text-lg md:text-[20px] text-[#555555] font-medium'>
                  We teach students to understand and care for others' feelings and perspectives.
                </span>
              </div>
            </div>

            {/* three-B */}
            <div className='w-full h-auto bg-[#F8F8F8] rounded-3xl flex flex-col p-6'>
              <div className='w-full h-auto'>
                <span className='text-xl sm:text-2xl md:text-[25px] text-[#555555] font-semibold'>Discipline</span>
              </div>
              <div className='w-full h-auto mt-2.5'>
                <span className='text-base sm:text-lg md:text-[20px] text-[#555555] font-medium'>
                  Discipline is the foundation of success and self-growth. We instill habits of punctuality, responsibility, and respect.
                </span>
              </div>
            </div>
          </div>

          {/* four */}
          <div className='w-full sm:w-[calc(50%-8px)] lg:w-[320px] h-auto bg-[#F8F8F8] rounded-3xl flex flex-col items-center gap-3 p-2'>
            <img src="./class-1.png" alt="class diversity image" className='w-full max-w-[302px] h-auto aspect-[302/192] rounded-3xl object-cover' />
            <div className='w-full max-w-[282px] h-auto flex items-center px-4'>
              <span className='text-xl sm:text-2xl md:text-[25px] text-[#555555] font-semibold'>Diversity</span>
            </div>
            <div className='w-full max-w-[274px] h-auto flex items-center px-4 pb-4'>
              <span className='text-base sm:text-lg md:text-[20px] text-[#555555] font-medium'>
                We celebrate differences in culture, thought, and background. Diversity teaches our students inclusion, open-mindedness, and global awareness.
              </span>
            </div>
          </div>

        </div>
      </div>


      {/* about culture */}
      <div className='w-full min-h-[750px] h-auto items-center flex flex-col px-4 py-8'>

        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>What Makes Our Culture Unique?</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Tradition with a Purpose: Our Culture
          </span>
        </div>

        <div className='w-full max-w-[1432px] h-auto flex flex-col lg:flex-row mt-8 sm:mt-12 md:mt-20 gap-5'>

          {/* image */}
          <div className='w-full lg:w-[550px] h-auto min-h-[300px] sm:min-h-[400px] lg:h-[460px] bg-[#F8F8F8] flex justify-center items-center p-8 rounded-3xl'>
            <div className='w-full max-w-[312px] aspect-square rounded-full overflow-hidden'>
              <img src="./logo.png" alt="logo of school" className='w-full h-full object-cover' />
            </div>
          </div>

          {/* information */}
          <div className='w-full lg:w-[742px] h-auto flex flex-col gap-4 sm:gap-5'>

            {/* one-A */}
            <div className='w-full h-auto min-h-[100px] bg-[#F8F8F8] rounded-2xl p-4 sm:p-6'>
              <div className='w-full h-auto flex flex-col justify-center'>
                <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>Morning Assembly</span>
                <span className='text-sm sm:text-base md:text-[18px] font-medium text-[#8D8D8D] mt-1'>
                  Each day begins with prayers and patriotic songs.
                </span>
              </div>
            </div>

            {/* two-A */}
            <div className='w-full h-auto min-h-[100px] bg-[#F8F8F8] rounded-2xl p-4 sm:p-6'>
              <div className='w-full h-auto flex flex-col justify-center'>
                <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>Value-Centered</span>
                <span className='text-sm sm:text-base md:text-[18px] font-medium text-[#8D8D8D] mt-1'>
                  We blend academics with moral and spiritual growth.
                </span>
              </div>
            </div>

            {/* three-A */}
            <div className='w-full h-auto min-h-[100px] bg-[#F8F8F8] rounded-2xl p-4 sm:p-6'>
              <div className='w-full h-auto flex flex-col justify-center'>
                <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>Cultural Celebrations</span>
                <span className='text-sm sm:text-base md:text-[18px] font-medium text-[#8D8D8D] mt-1'>
                  Festivals and traditions are celebrated with joy and learning.
                </span>
              </div>
            </div>

            {/* four-A */}
            <div className='w-full h-auto min-h-[100px] bg-[#F8F8F8] rounded-2xl p-4 sm:p-6'>
              <div className='w-full h-auto flex flex-col justify-center'>
                <span className='text-lg sm:text-xl md:text-[22px] font-semibold text-[#555555]'>Respect for All</span>
                <span className='text-sm sm:text-base md:text-[18px] font-medium text-[#8D8D8D] mt-1'>
                  Every student is taught to honor elders, peers, and diversity.
                </span>
              </div>
            </div>
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
      <div className="flex flex-col lg:flex-row h-auto lg:h-[445px]">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full">
          <img src="/campus1.jpg" alt="Campus 1" className="w-full h-full object-cover lg:rounded-l" />
          {/* Overlay with text inside */}
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
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full">
          <img src="/campus2.jpg" alt="Campus 2" className="w-full h-full object-cover lg:rounded-r" />
          {/* Overlay with text inside */}
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

export default SchoolCulture