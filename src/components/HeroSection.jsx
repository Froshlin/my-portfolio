import React from "react";
import resume from "../assets/Joshua_Oni_resume.pdf";
import myPic from "../assets/my_image1.jpg";
import ShootingStars from "./ShootingStars";

function HeroSection() {
  return (
    <div className='bg-[url("/hero-bg.png")] bg-[#121928] bg-cover bg-center min-h-screen flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 text-white px-4 sm:px-6 md:px-12 lg:px-20 py-8 lg:py-0 relative overflow-hidden'>
      <ShootingStars/>
      {/* Hero Text Content */}
      <div className="flex-1 max-w-4xl text-center lg:text-left order-2 lg:order-1">
        <div className="flex flex-col mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Hi, I'm Joshua Oni
          </h1>
          <h3 className="text-[#3676de] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Frontend Developer
          </h3>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
          I build user interface modern web applications using React.js and
          Next.js, creating seamless user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center font-medium"
          >
            View Projects
          </a>
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-300 cursor-pointer font-medium">
            <a href={resume} download="resume">
              Download Resume
            </a>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-shrink-0 order-1 lg:order-2">
        <div className="relative">
          <img
            src={myPic}
            alt="Joshua Oni"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-blue-600 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-600/20 blur-sm"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
