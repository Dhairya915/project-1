import React, { useState } from "react";

function ContactUs() {

  const contactCards = [
    {
      id: 1,
      label: "Call Us",
      value: "+91 9987584534",
      icon: "/phone.png",
    },
    {
      id: 2,
      label: "Email Us",
      value: "school@gmail.com",
      icon: "/mail.png",
    },
    {
      id: 3,
      label: "Address",
      value: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
      icon: "/location.png",
    },
  ];

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number || !message) {
      alert("Please fill all fields");
      return;
    }

    const formData = {
      name,
      number,
      message,
    };

    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");

    // Reset form
    setName("");
    setNumber("");
    setMessage("");
  };

  return (
    <div className="w-full min-h-[748px] h-auto px-4 py-8 sm:py-12 md:py-16">

      <div className="w-full max-w-[1327px] mx-auto h-auto bg-white">

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* CONTACT INFO */}
          <div className="w-full lg:w-[666px] flex flex-col gap-4 sm:gap-6">

            {/* Caption */}
            <div className="flex flex-col gap-1">
              <span className="text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium">Contact Us</span>
              <span className="text-lg sm:text-xl md:text-[20px] text-[#8D8D8D]">
                Have questions or need assistance? Reach out
              </span>
            </div>

            {/* Cards */}
            {contactCards.map((card) => (
              <div
                key={card.id}
                className="w-full h-auto min-h-[100px] sm:min-h-[110px] rounded-md border border-[#5555551A] flex items-center p-4"
              >
                <div className="flex items-center gap-4">

                  {/* Rounded icon */}
                  <div className="w-[50px] h-[50px] flex-shrink-0 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <img
                      src={card.icon}
                      alt={card.label}
                      className="w-[28px] h-[28px] object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg md:text-[18px] text-[#8D8D8D]">
                      {card.label}
                    </span>
                    <span className="text-lg sm:text-xl md:text-[22px] font-medium break-words">
                      {card.value}
                    </span>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* CONTACT FORM */}
          <div className="w-full lg:w-[619px] h-auto rounded-md bg-[#F5F5F5] flex justify-center p-4 sm:p-6">
            <form
              className="w-full max-w-[564px] h-auto flex flex-col"
              onSubmit={handleSubmit}
            >
              <span className="text-xl sm:text-2xl md:text-[26px] text-[#555555] font-semibold">
                Contact Form
              </span>

              {/* Name */}
              <div className="flex flex-col gap-2 sm:gap-3 mt-5 sm:mt-6">
                <span className="text-sm sm:text-base md:text-[16px]">Full Name</span>
                <input
                  className="h-[45px] sm:h-[50px] w-full bg-white rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-[#3A53A4]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone / Email */}
              <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-5">
                <span className="text-sm sm:text-base md:text-[16px]">Phone Number / Email</span>
                <input
                  className="h-[45px] sm:h-[50px] w-full bg-white rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-[#3A53A4]"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter phone or email"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-5">
                <span className="text-sm sm:text-base md:text-[16px]">Message</span>
                <textarea
                  className="h-[100px] sm:h-[122px] w-full bg-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A53A4] resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 sm:mt-8 w-full h-[45px] sm:h-[50px] bg-[#3A53A4] font-semibold flex justify-center items-center text-white text-lg sm:text-xl md:text-[20px] rounded-md hover:bg-[#2d4283] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactUs;



