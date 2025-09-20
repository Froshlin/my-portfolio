import React from "react";
import myPic from "../assets/my_image1.jpg";

function HeroSection() {
  return (
    <div className='bg-[url("/hero-bg.png")] bg-[#121928] bg-cover bg-center h-screen flex flex-col md:flex-row justify-center items-center gap-10 text-white px-6 md:px-20'>
      {/* Hero Text Content */}
      <div>
        <div className="flex flex-col mb-10">
          <h1 className="text-6xl font-bold mb-4">Hi, I'm Joshua Oni</h1>
          <h3 className="text-[#3676de] text-5xl font-semibold">
            Frontend Developer
          </h3>
        </div>
        <p className="text-2xl mb-6">
          I build user interface modern web applications using React.Js and
          Next.Js, creating seamingless user experiences.
        </p>

        <a
          href="projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View Projects
        </a>
        <a href="">
          <button className="ml-4 bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-300 cursor-pointer">
            Download Resume
          </button>
        </a>
      </div>
      {/* Hero Image */}
      <div className="">
        <img
          src={myPic}
          alt="Joshua Oni"
          className="w-full h-full rounded-full border-4 border-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default HeroSection;
