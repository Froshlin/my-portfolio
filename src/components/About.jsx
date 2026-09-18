import React from "react";
import myPic from "../assets/my_image1.jpg";
import Reveal from "./Reveal";
import BackgroundFX from "./BackgroundFX";

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
      className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 sm:gap-10 lg:gap-16 text-ink px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-28 bg-ivory relative overflow-hidden"
    >
      <BackgroundFX variant="section" />

      {/* Image Container */}
      <Reveal className="relative z-10 w-full lg:w-[45%] flex justify-center lg:justify-start">
        <div className="relative">
          <img
            src={myPic}
            alt="Joshua Oni"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-paper transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer shadow-xl"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-accent/15"></div>
        </div>
      </Reveal>

      {/* About Text Container */}
      <Reveal delay={0.1} className="relative z-10 w-full lg:w-[55%] text-center lg:text-left">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-ink">
          About Me
        </h2>

        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-muted max-w-2xl mx-auto lg:mx-0">
          I'm Joshua Oni, a passionate Frontend Developer with expertise in
          React.js and Next.js. I specialize in creating seamless user
          experiences and building modern web applications. With a strong
          foundation in HTML, CSS, and JavaScript, I bring designs to life
          with clean and efficient code.
        </p>

        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed text-muted max-w-2xl mx-auto lg:mx-0">
          When I'm not coding, I enjoy exploring new technologies,
          contributing to open-source projects, and enhancing my skills. I'm
          always eager to take on new challenges and collaborate on exciting
          projects.
        </p>

        {/* Skills Container */}
        <div className="space-y-2">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-paper border border-line hover:border-accent hover:text-accent text-ink px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;
