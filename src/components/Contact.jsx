import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7c1cu4i", "template_nwm9ehs", form.current, {
        publicKey: "P2Tp0AV8docHIPMch",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset form after successful submission
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-section bg-[#111827] text-white py-48 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form flex flex-col gap-4 max-w-full w-1/2 mx-auto"
        >
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
            className="bg-[#1f2937] border-2 border-[#2f3848] outline-none px-4.5 py-3 rounded-lg"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="bg-[#1f2937] border-2 border-[#2f3848] outline-none px-4.5 py-3 rounded-lg"
            name="from_email"
            value={formData.from_email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="bg-[#1f2937] border-2 border-[#2f3848] outline-none px-4.5 py-3 rounded-lg"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <input
            type="submit"
            value="Send"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
          />
        </form>

        <div className="contact-info text-lg md:ml-20 mt-10 md:mt-0 max-w-full w-1/2">
          <div className="flex items-center gap-4 mt-10">
            <img src="/icons/email.png" alt="email" width={33} height={33} />
            <span>onitimilehin87@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <img src="/icons/github.png" alt="github" width={33} height={33} />
            <span>github.com/Froshlin</span>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <img
              src="/icons/linkedin.png"
              alt="linkedin"
              width={33}
              height={33}
            />
            <span>https://www.linkedin.com/in/joshua-oni-1b633a244</span>
          </div>
        </div>
      </div>
    </div>
  );
};
