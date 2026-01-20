import React, { useState } from "react";

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
    <div className="relative h-[748px] w-full">

      <div className="absolute h-[605px] w-[1327px] top-[67px] left-[93px] bg-white">

        {/* CONTACT INFO */}
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
              className={`w-full rounded-md border border-[#5555551A] flex items-center ${card.height}`}
            >
              <div className="flex items-center gap-4 px-4">

                {/* Rounded icon */}
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

        {/* CONTACT FORM */}
        <div className="absolute h-[605px] w-[619px] right-0 rounded-md bg-[#F5F5F5] flex justify-center">
          <form
            className="h-[533px] w-[564px] mt-5 rounded-md flex flex-col p-5"
            onSubmit={handleSubmit}
          >
            <span className="text-[26px] text-[#555555] font-semibold">
              Contact Form
            </span>

            {/* Name */}
            <div className="flex flex-col gap-3 mt-6">
              <span className="text-[16px]">Full Name</span>
              <input
                className="h-[50px] w-full bg-white rounded-md px-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Phone / Email */}
            <div className="flex flex-col gap-3 mt-5">
              <span className="text-[16px]">Phone Number / Email</span>
              <input
                className="h-[50px] w-full bg-white rounded-md px-3"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-3 mt-5">
              <span className="text-[16px]">Message</span>
              <textarea
                className="h-[122px] w-full bg-white rounded-md px-3 py-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-auto w-full h-[50px] bg-[#3A53A4] font-semibold flex justify-center items-center text-white text-[20px] rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;



