import React from 'react'

function ContactUs() {

  const contactCards = [
    {
      id: 1,
      label: "Call Us",
      value: "+91 9987584534",
      icon: "/phone.png",
      height: "h-[110px]",
    },
    {
      id: 2,
      label: "Email Us",
      value: "school@gmail.com",
      icon: "/mail.png",
      height: "h-[110px]",
    },
    {
      id: 3,
      label: "Address",
      value: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
      icon: "/location.png",
      height: "h-[139px]",
    },
  ];


  return (
    <div className='relative h-[748px] w-full '>

      <div className='absolute h-[605px] w-[1327px] top-[67px] left-[93px] bg-white'>

        {/* contact us */}
        <div className="absolute top-[49px] w-[666px] h-[500px] flex flex-col gap-6">

          {/* Caption */}
          <div className="flex flex-col gap-1">
            <span className="text-[18px] text-[#F0942A]">Contact Us</span>
            <span className="text-[20px] text-[#8D8D8D]">
              Have questions or need assistance? Reach out
            </span>
          </div>

          {/* Cards */}
          {contactCards.map((card) => (
            <div
              key={card.id}
              className={`w-full rounded-md border flex items-center ${card.height}`}
            >
              <div className="flex items-center gap-4 px-4">

                {/* Rounded icon container */}
                <div className="w-[50px] h-[50px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.label}
                    className="w-[28px] h-[28px] object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[18px] text-[#8D8D8D]">
                    {card.label}
                  </span>
                  <span className="text-[22px] font-medium">
                    {card.value}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>


        {/* contact form */}
        <div className="absolute h-[605px] w-[619px] right-0 rounded-md bg-[#F5F5F5] flex justify-center">
          <div className="h-[533px] w-[564px] mt-5 bg-[#F5F5F5] rounded-md flex flex-col p-5">

            <span className="text-[26px] text-[#555555] font-semibold">
              Contact Form
            </span>

            {/* Name */}
            <div className="flex flex-col gap-3 mt-6">
              <span className="text-[16px]">Full Name</span>
              <input className="h-[50px] w-full bg-white rounded-md" />
            </div>

            {/* Phone / Email */}
            <div className="flex flex-col gap-3 mt-5">
              <span className="text-[16px]">Phone Number / Email</span>
              <input className="h-[50px] w-full bg-white rounded-md" />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-3 mt-5">
              <span className="text-[16px]">Message</span>
              <textarea className="h-[122px] w-full bg-white rounded-md"></textarea>
            </div>

            {/* Button at bottom */}
            <button className="mt-auto w-full h-[50px] bg-[#3A53A4] font-semibold flex justify-center items-center text-white text-[20px] rounded-md">
              Submit
            </button>

          </div>
        </div>


      </div>


    </div>
  )
}

export default ContactUs