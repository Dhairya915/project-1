import React from 'react'


function AboutUs() {

  const items = [
    {
      title: "Attendance Policy",
      description:
        "Regular attendance is compulsory for academic progress and participation in school activities.",
      color: "blue",
    },
    {
      title: "Discipline Policy",
      description:
        "Students are expected to maintain respectful behavior and follow school rules at all times.",
      color: "blue",
    },
    {
      title: "Uniform Policy",
      description:
        "Wearing the proper school uniform daily is mandatory for all students.",
      color: "blue",
    },
    {
      title: "Homework Policy",
      description:
        "Homework must be completed on time to support continuous learning.",
      color: "orange",
    },
    {
      title: "Examination Policy",
      description:
        "Students must appear for all exams honestly and as per schedule.",
      color: "orange",
    },
    {
      title: "Mobile Phone Policy",
      description:
        "Mobile phones are not allowed within the school premises.",
      color: "orange",
    },
    {
      title: "Health and Safety Policy",
      description:
        "We ensure a clean, safe, and secure environment for every student.",
      color: "blue",
    },
    {
      title: "Fee Payment Policy",
      description:
        "All fees should be paid on time as per the school’s payment schedule.",
      color: "blue",
    },
    {
      title: "Digital Etiquette Policy",
      description:
        "Students must use digital platforms responsibly and respectfully.",
      color: "blue",
    },
  ];

  const staffMembers = [
    { id: 1, name: "Sanjay Varma", role: "Principle", image: "/image1.png" },
    { id: 2, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 3, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 4, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
    { id: 5, name: "Sanjay Varma", role: "Teacher", image: "/image1.png" },
  ];



  return (

    <div className='w-full'>

      {/* history slide-1 */}
      <div className='w-full h-[750px]   items-center flex flex-col'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>School Culture</span>
          <span className='text-[30px] text-[#555555] font-semibold'>A School Culture Rooted in Values and Growth</span>
        </div>

        <div className='w-[1346px] h-[430px] mt-16.5   flex flex-row justify-between gap-28.5'>
          {/* image */}
          <div className=" h-full">
            <div className="grid grid-cols-2 gap-2 w-[550px] h-full ">

              {/* Top Left */}
              <div>
                <img
                  src="/img1l.png"
                  alt="Top Left"
                  className="w-full h-[210px] object-cover rounded-xl"
                />
              </div>

              {/* Top Right */}
              <div>
                <img
                  src="/img1r.png"
                  alt="Top Right"
                  className="w-full h-[210px] object-cover rounded-xl"
                />
              </div>

              {/* Bottom Left */}
              <div>
                <img
                  src="/img4b.png"
                  alt="Bottom Left"
                  className="w-full h-[210px] object-cover rounded-xl"
                />
              </div>

              {/* Bottom Right */}
              <div>
                <img
                  src="/img2r.png"
                  alt="Bottom Right"
                  className="w-full h-[210px] object-cover rounded-xl"
                />
              </div>

            </div>
          </div>

          {/* data */}
          <div className='w-[696px] h-full  flex flex-col gap-6.5'>

            {/* data-1 */}
            <div className='w-[696px] h-[111px]  mt-5.75 flex items-center gap-2'>
              <span className='text-[18px] text-[#555555]'>
                Founded with a vision to blend education with Indian values, Shree B.S. <br></br>
                Goswami Saraswati Shishumandir began its journey with just a few  <br></br>
                students. </span>
            </div>

            {/* data-2 */}
            <div className='w-[696px] h-[222px]  mt-5.75 flex items-center gap-2'>
              <span className='text-[18px] text-[#555555]'>
                The school was founded under the guidance of visionary leaders who  <br></br>
                believed that education must blend knowledge with sanskar. With a    <br></br>
                dedicated team of teachers and support from the local community, the  <br></br>
                school has continued to uphold its mission. Today, it stands as a symbol  <br></br>
                of trust and tradition, shaping generations with a balanced blend of <br></br>
                modern learning and cultural heritage.
              </span>
            </div>
          </div>

        </div>
      </div>


      {/* mission and values slide-2 */}
      <div className='w-full h-[710px]    flex flex-row gap-2.5'>

        {/* mission and vision- left part */}
        <div className='w-[665px] h-[585px] my-auto  ml-20 flex flex-col gap-2.5'>
          {/* first */}
          <div className='w-full h-[289px]  bg-[#F8F8F8]  flex flex-col gap-5 rounded-2xl'>
            <span className='w-fit text-[28px] text-[#F0942A] font-semibold mt-23.75 ml-8.25 '>Our Mission</span>
            <span className='w-[598px] h-[112px] text-[18px] text-[#8D8D8D] font-medium ml-8.25'>
              To provide holistic education that nurtures knowledge,
              discipline, and cultural values, shaping students into
              responsible and confident individuals.
            </span>
          </div>

          {/* second */}
          <div className='w-full h-[289px] bg-[#F8F8F8]  flex flex-col gap-5 rounded-2xl'>
            <span className='w-fit text-[28px] text-[#F0942A] font-semibold mt-23.75 ml-8.25 '>Our Vision</span>
            <span className='w-[598px] h-[112px] text-[18px] text-[#8D8D8D] font-medium ml-8.25'>
              To be a leading institution that blends traditional Indian values
              with modern education, inspiring lifelong learning and strong
              moral character.
            </span>
          </div>
        </div>

        {/* core values- right part*/}
        <div className="w-[665px] h-[585px] bg-[#F8F8F8]  my-auto flex flex-col gap-5 rounded-2xl">

          {/* heading */}
          <span className=" text-[28px] text-[#F0942A] font-semibold mt-10 ml-11 ">
            Core Values
          </span>

          {/* data-one */}
          <div className='w-[576px] h-[129px] flex flex-col justify-center mx-auto ml-11  gap-2'>
            <span className='text-[24px] text-[#555555] font-semibold'>અમારા મૂલ્યો (Our Values)</span>
            <span className='text-[20px] text-[#8D8D8D] font-medium'>
              અમે અનુશાસન, સમર્પણ અને સંસ્કૃતિગૌરવને મહત્વ આપીએ છીએ. (We
              value discipline, devotion, and cultural pride.)
            </span>
          </div>

          {/* data-two */}
          <div className='w-[576px] h-[129px] flex flex-col justify-center mx-auto ml-11  gap-2'>
            <span className='text-[24px] text-[#555555] font-semibold'>મૂલ્યના સ્તંભો (Value Pillars)</span>
            <span className='text-[20px] text-[#8D8D8D] font-medium'>
              અમારું આધાર ઇમાનદારી, સન્માન અને જવાબદારી પર છે.(Our
              foundation is built on honesty, respect, and
              responsibility.)
            </span>
          </div>

          {/* data-three */}
          <div className='w-[576px] h-[129px] flex flex-col justify-center mx-auto ml-11  gap-2'>
            <span className='text-[24px] text-[#555555] font-semibold'>માર્ગદર્શક સિદ્ધાંતો (Guiding Principles)</span>
            <span className='text-[20px] text-[#8D8D8D] font-medium'>
              અમે એવા મૂલ્યો વિકસાવીએ છીએ જે મજબૂત પાત્રતા અને નૈતિક શક્તિ આપે
              છે.(We nurture values that shape strong character and
              moral strength.)
            </span>
          </div>

        </div>

      </div>


      {/* managed by slide-3 */}
      <div className='w-full h-[710px]  flex items-center justify-center'>

        <div className='w-[1352px] h-[567px]  rounded-2xl flex flex-row gap-14.5'>

          {/* logo2 */}
          <div className='w-[617px] h-[545px] my-auto ml-2.5 bg-[#3A53A4] flex justify-center items-center rounded-2xl'>
            <img src="./logo2.png" alt="logo2" className='w-[310px] h-[310px] rounded-full  object-cover ' />
          </div>

          {/* data about trust */}
          <div className='w-[618px] h-[436px] mt-18 flex flex-col'>
            <span className='text-[18px] text-[#F0942A] font-medium pt-1'>Managed By</span>
            <span className='text-[30px] text-[#555555] font-semibold '>Shree Vidya Prachar Mandal</span>
            <div>
              <span className='text-[18px] text-[#8D8D8D] font-medium mt-5 flex items-center '>
                Shree B.S. Goswami Saraswati Shishumandir is proudly managed by Shree Vidya Prachar Mandal, a dedicated organization committed to promoting value-based education.
              </span>
            </div>
            <div>
              <span className='text-[18px] text-[#8D8D8D] font-medium mt-4 flex items-center '>
                The Mandal has been instrumental in establishing institutions that blend academic excellence with cultural and moral development. Guided by visionary leadership, it works tirelessly to instill Indian traditions, discipline, and patriotism among students. The Mandal regularly organizes training, cultural events, and educational programs that enrich the school environment.
              </span>
            </div>
          </div>

        </div>

      </div>


      {/* history slide-4 */}
      <div className='w-full h-[750px]   items-center flex flex-col'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>School Policies</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Lorem ipsum dolor sit amet, consectetur elit.</span>
        </div>

        {/* <div className='w-[1352px] h-[405px] mt-12 bg-blue-300'>

        </div> */}
        <div className="w-[1352px] h-[405px] mt-12  grid grid-cols-3 grid-rows-3 gap-4 place-items-center rounded-xl">
          {items.map((item, index) => (
            <div key={index} className="w-[437px] h-[130px] bg-[#F8F8F8] shadow-xl rounded-lg ">
              <h3
                className={`font-semibold text-lg ${item.color === "orange" ? "text-[#F0942A]" : "text-[#3A53A4]"
                  }`}
              >
                {item.title}
              </h3>
              <p className="text-[#8D8D8D] text-sm mt-2">
                {item.description}
              </p>
            </div>
          ))}

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
              <div className="w-[180px] h-[180px] rounded-full border-4 border-blue-600 overflow-hidden">
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

export default AboutUs