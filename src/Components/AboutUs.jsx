import React from 'react'


function AboutUs() {

  const items = [
    {
      title: "Attendance Policy",
      description:
        "Regular attendance is compulsory for academic progress and participation in school activities.",
      borderTop: "border-t-4 border-t-[#E8ECF7]",
      textColor: "text-[#3A53A4]",
    },
    {
      title: "Discipline Policy",
      description:
        "Students are expected to maintain respectful behavior and follow school rules at all times.",
      borderTop: "border-t-4 border-t-[#E8ECF7]",
      textColor: "text-[#3A53A4]",
    },
    {
      title: "Uniform Policy",
      description:
        "Wearing the proper school uniform daily is mandatory for all students.",
      borderTop: "border-t-4 border-t-[#E8ECF7]",
      textColor: "text-[#3A53A4]",
    },
    {
      title: "Homework Policy",
      description:
        "Homework must be completed on time to support continuous learning.",
      borderTop: "border-t-4 border-t-[#FFF1E1]",
      textColor: "text-[#F0942A]",
    },
    {
      title: "Examination Policy",
      description:
        "Students must appear for all exams honestly and as per schedule.",
      borderTop: "border-t-4 border-t-[#FFF1E1]",
      textColor: "text-[#F0942A]",
    },
    {
      title: "Mobile Phone Policy",
      description:
        "Mobile phones are not allowed within the school premises.",
      borderTop: "border-t-4 border-t-[#FFF1E1]",
      textColor: "text-[#F0942A]",
    },
    {
      title: "Health and Safety Policy",
      description:
        "We ensure a clean, safe, and secure environment for every student.",
      borderTop: "border-t-4 border-t-[#E8ECF7]",
      textColor: "text-[#3A53A4]",
    },
    {
      title: "Fee Payment Policy",
      description:
        "All fees should be paid on time as per the school’s payment schedule.",
      borderTop: "border-t-4 border-t-[#E8ECF7]",
      textColor: "text-[#3A53A4]",
    },
    {
      title: "Digital Etiquette Policy",
      description:
        "Students must use digital platforms responsibly and respectfully.",
      borderTop: "border-t-4 border-t-[#E8ECF7]",
      textColor: "text-[#3A53A4]",
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

    <div className="w-full">

      {/* history slide-1 */}
      <div className="w-full flex flex-col items-center h-auto md:h-[750px]">

        <div className="flex flex-col justify-center items-center mt-6 md:mt-13 gap-2 md:gap-1 w-[90%] md:w-[842px] h-auto">
          <span className="text-[16px] md:text-[18px] text-[#F0942A] font-medium text-center">
            School Culture
          </span>
          <span className="text-[22px] md:text-[30px] text-[#555555] font-semibold text-center">
            A School Culture Rooted in Values and Growth
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 md:gap-28.5 mt-8 md:mt-16.5 w-[95%] md:w-[1346px] h-auto">

          {/* image */}
          <div className="h-full w-full md:w-auto flex justify-center md:justify-start">
            <div className="grid grid-cols-2 gap-4 md:w-[550px] h-full">
              <img src="/img1l.png" alt="Top Left" className="w-full h-[150px] md:h-[210px] object-cover rounded-xl" />
              <img src="/img1r.png" alt="Top Right" className="w-full h-[150px] md:h-[210px] object-cover rounded-xl" />
              <img src="/img4b.png" alt="Bottom Left" className="w-full h-[150px] md:h-[210px] object-cover rounded-xl" />
              <img src="/img2r.png" alt="Bottom Right" className="w-full h-[150px] md:h-[210px] object-cover rounded-xl" />
            </div>
          </div>

          {/* data */}
          <div className="flex flex-col gap-6 md:gap-6.5 w-full md:w-[696px] h-auto items-center md:items-start">
            <div className="flex items-center gap-2 h-auto md:h-[111px]">
              <span className="text-[16px] md:text-[18px] text-[#555555] text-center md:text-left">
                Founded with a vision to blend education with Indian values, Shree B.S. <br />
                Goswami Saraswati Shishumandir began its journey with just a few <br />
                students.
              </span>
            </div>

            <div className="flex items-center gap-2 h-auto md:h-[222px]">
              <span className="text-[16px] md:text-[18px] text-[#555555] text-center md:text-left">
                The school was founded under the guidance of visionary leaders who <br />
                believed that education must blend knowledge with sanskar. With a <br />
                dedicated team of teachers and support from the local community, the <br />
                school has continued to uphold its mission. Today, it stands as a symbol <br />
                of trust and tradition, shaping generations with a balanced blend of <br />
                modern learning and cultural heritage.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* mission and values slide-2 */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-2.5 mt-8 md:mt-0 justify-center">

        {/* mission and vision */}
        <div className="flex flex-col gap-6 w-full md:w-[665px] h-auto">

          {/* Mission */}
          <div className="w-full max-w-full md:h-[289px] bg-[#F8F8F8] flex flex-col rounded-2xl p-4 md:p-8">
            <span className="text-[22px] md:text-[28px] text-[#F0942A] font-semibold mt-[33px]">
              Our Mission
            </span>
            <span className="text-[16px] md:text-[18px] text-[#8D8D8D] font-medium flex-1 flex items-start justify-center pt-4 md:pt-6 text-center md:text-left">
              To provide holistic education that nurtures knowledge, discipline, and cultural values, shaping students into responsible and confident individuals.
            </span>
          </div>

          {/* Vision */}
          <div className="w-full max-w-full md:h-[289px] bg-[#F8F8F8] flex flex-col rounded-2xl p-4 md:p-8">
            <span className="text-[22px] md:text-[28px] text-[#F0942A] font-semibold mt-[33px]">
              Our Vision
            </span>
            <span className="text-[16px] md:text-[18px] text-[#8D8D8D] font-medium flex-1 flex items-start justify-center pt-4 md:pt-6 text-center md:text-left">
              To be a leading institution that blends traditional Indian values with modern education, inspiring lifelong learning and strong moral character.
            </span>
          </div>

        </div>


        {/* core values */}
        <div className="flex flex-col gap-[20px] w-full md:w-[665px] h-auto bg-[#F8F8F8] rounded-2xl p-4 md:p-8 items-center md:items-start">
          <span className="text-[22px] md:text-[28px] text-[#F0942A] font-semibold mt-4 md:mt-10 text-center md:text-left">
            Core Values
          </span>

          <div className="flex flex-col gap-3 w-full text-center md:text-left">
            <span className="text-[20px] md:text-[24px] text-[#555555] font-semibold">અમારા મૂલ્યો (Our Values)</span>
            <span className="text-[16px] md:text-[20px] text-[#8D8D8D] font-medium">
              અમે અનુશાસન, સમર્પણ અને સંસ્કૃતિગૌરવને મહત્વ આપીએ છીએ. (We value discipline, devotion, and cultural pride.)
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full text-center md:text-left">
            <span className="text-[20px] md:text-[24px] text-[#555555] font-semibold">મૂલ્યના સ્તંભો (Value Pillars)</span>
            <span className="text-[16px] md:text-[20px] text-[#8D8D8D] font-medium">
              અમારું આધાર ઇમાનદારી, સન્માન અને જવાબદારી પર છે.(Our foundation is built on honesty, respect, and responsibility.)
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full text-center md:text-left">
            <span className="text-[20px] md:text-[24px] text-[#555555] font-semibold">માર્ગદર્શક સિદ્ધાંતો (Guiding Principles)</span>
            <span className="text-[16px] md:text-[20px] text-[#8D8D8D] font-medium">
              અમે એવા મૂલ્યો વિકસાવીએ છીએ જે મજબૂત પાત્રતા અને નૈતિક શક્તિ આપે છે.(We nurture values that shape strong character and moral strength.)
            </span>
          </div>
        </div>

      </div>


    </div>


  )
}

export default AboutUs