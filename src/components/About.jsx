import React from "react";
import myPic from "../assets/my_image1.jpg";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <div
      id="about"
      className="w-full flex flex-col md:flex-row justify-between gap-10 text-white px-6 md:px-20 py-28 bg-[#111827]"
    >
      {/* Image Container */}
      <div className="max-w-[45%]">
        <img src={myPic} alt="Joshua Oni" className="w-90 h-90 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
      </div>
      {/* About Text Container */}
      <div className="max-w-[55%]">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-7 leading-8">
          I'm Joshua Oni, a passionate Frontend Developer with expertise in
          React.js and Next.js. I specialize in creating seamless user
          experiences and building modern web applications. With a strong
          foundation in HTML, CSS, and JavaScript, I bring designs to life with
          clean and efficient code. When I'm not coding, I enjoy exploring new
          technologies, contributing to open-source projects, and enhancing my
          skills. I'm always eager to take on new challenges and collaborate on
          exciting projects.
        </p>
        {/* Skills Container */}
        <div>
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-[#363f4e] text-[#81b7f6] px-4 py-2 m-1 rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
