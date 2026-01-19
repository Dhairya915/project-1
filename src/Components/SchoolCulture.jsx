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
      <div className='w-full h-[750px]  items-center flex flex-col'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>School Culture</span>
          <span className='text-[30px] text-[#555555] font-semibold'>A School Culture Rooted in Values and Growth</span>
        </div>

        <div className='w-[1346px] h-[470px] mt-16.5  flex flex-row justify-between'>

          {/* first */}
          <div className='w-[320px] h-[470px] bg-[#F8F8F8]  rounded-3xl flex flex-col items-center gap-3'>
            <img src="./class-1.png" alt="class 1 image" className='w-[302px] h-[192px] rounded-3xl mt-2 ' />
            <div className='w-[282px] h-[33px] flex items-center  '>
              <span className='text-[25px] text-[#555555] font-semibold'>Respect</span>
            </div>
            <div className='w-[274px] h-[192px] flex items-center  '>
              <span className='text-[20px] text-[#555555] font-medium'>
                Our students begin each day
                with prayer, fostering inner
                calm and unity.
                Discipline is not imposed but
                instilled through routine and
                responsibility.
              </span>
            </div>
          </div>

          {/* two */}
          <div className='w-[320px] h-[470px] bg-[#F8F8F8]  rounded-3xl flex flex-col items-center gap-3'>
            <img src="./class-2.png" alt="class 1 image" className='w-[302px] h-[192px] rounded-3xl mt-2 ' />
            <div className='w-[282px] h-[33px] flex items-center  '>
              <span className='text-[25px] text-[#555555] font-semibold'>Curiosity</span>
            </div>
            <div className='w-[274px] h-[192px] flex items-center  '>
              <span className='text-[20px] text-[#555555] font-medium'>
                At our school, we encourage
                students to ask questions,
                explore ideas, and think beyond
                textbooks. Curiosity is the first
                step toward lifelong learning.
              </span>
            </div>
          </div>

          {/* three */}
          <div className='w-[320px] h-[470px]   rounded-3xl flex flex-col justify-between'>
            {/* three-A */}
            <div className='w-[321px] h-[223px] bg-[#F8F8F8] rounded-3xl flex flex-col '>
              <div className='w-[213px] h-[33px] mt-9 mx-5.75 '>
                <span className='text-[25px] text-[#555555] font-semibold'>Empathy</span>
              </div>
              <div className='w-[287px] h-[112px]  mt-2.5 mx-5.75'>
                <span className='text-[20px] text-[#555555] font-medium'>
                  We teach students to understand
                  and care for others' feelings and
                  perspectives.
                </span>
              </div>
            </div>

            {/* three-B */}
            <div className='w-[321px] h-[223px] bg-[#F8F8F8] rounded-3xl  flex flex-col '>
              <div className='w-[213px] h-[33px]  mt-9 mx-5.75 '>
                <span className='text-[25px] text-[#555555] font-semibold'>Discipline</span>
              </div>
              <div className='w-[287px] h-[112px]  mt-2.5 mx-5.75'>
                <span className='text-[20px] text-[#555555] font-medium'>
                  Discipline is the foundation of
                  success and self-growth.
                  We instill habits of punctuality,
                  responsibility, and respect.
                </span>
              </div>
            </div>
          </div>

          {/* four */}
          <div className='w-[320px] h-[470px] bg-[#F8F8F8]  rounded-3xl flex flex-col items-center gap-3'>
            <img src="./class-1.png" alt="class 1 image" className='w-[302px] h-[192px] rounded-3xl mt-2 ' />
            <div className='w-[282px] h-[33px] flex items-center  '>
              <span className='text-[25px] text-[#555555] font-semibold'>Diversity</span>
            </div>
            <div className='w-[274px] h-[192px] flex items-center  '>
              <span className='text-[20px] text-[#555555] font-medium'>
                We celebrate differences in
                culture, thought, and
                background. Diversity teaches
                our students inclusion, open-mindedness
                , and global awareness.
              </span>
            </div>
          </div>



        </div>
      </div>


      {/* about culture */}
      <div className='w-full h-[750px]  items-center flex flex-col  '>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>What Makes Our Culture Unique?</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Tradition with a Purpose: Our  Culture</span>
        </div>

        <div className='w-[1432px] h-[460px]  flex flex-row mt-20 ml-20 gap-5'>

          {/* image */}
          <div className='w-[550px] h-[460px] bg-[#F8F8F8] flex justify-center items-center'>
            <div className='w-[312px] h-[296px] rounded-full'>
              <img src="./logo.png" alt="logo of school" />
            </div>
          </div>

          {/* imformation */}
          <div className='w-[742px] h-full  flex flex-col justify-between'>

            {/* one-A */}
            <div className='w-full h-[100px] bg-[#F8F8F8] rounded-2xl'>
              <div className='w-[598px] h-[71px]  flex flex-col mt-3.25 ml-8.25 justify-center'>
                <span className='text-[22px] font-semibold text-[#555555] '>Morning Assembly</span>
                <span className='text-[18px] font-medium text-[#8D8D8D] '>Each day begins with prayers and patriotic songs.</span>
              </div>
            </div>

            {/* two-A */}
            <div className='w-full h-[100px] bg-[#F8F8F8] rounded-2xl'>
              <div className='w-[598px] h-[71px]  flex flex-col mt-3.25 ml-8.25 justify-center'>
                <span className='text-[22px] font-semibold text-[#555555] '>Value-Centered</span>
                <span className='text-[18px] font-medium text-[#8D8D8D] '>We blend academics with moral and spiritual growth.</span>
              </div>
            </div>

            {/* three-A */}
            <div className='w-full h-[100px] bg-[#F8F8F8] rounded-2xl'>
              <div className='w-[598px] h-[71px]  flex flex-col mt-3.25 ml-8.25 justify-center'>
                <span className='text-[22px] font-semibold text-[#555555] '>Cultural Celebrations</span>
                <span className='text-[18px] font-medium text-[#8D8D8D] '>Festivals and traditions are celebrated with joy and learning.</span>
              </div>
            </div>

            {/* four-A */}
            <div className='w-full h-[100px] bg-[#F8F8F8] rounded-2xl'>
              <div className='w-[598px] h-[71px] flex flex-col mt-3.25 ml-8.25 justify-center'>
                <span className='text-[22px] font-semibold text-[#555555] '>Respect for All</span>
                <span className='text-[18px] font-medium text-[#8D8D8D] '>Every student is taught to honor elders, peers, and diversity.</span>
              </div>
            </div>
          </div>


        </div>

      </div>

      {/* gallery */}
      <div className=" bg-white h-[640px]  mt-5">

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
      <div className="flex h-[445px] ">
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

export default SchoolCulture