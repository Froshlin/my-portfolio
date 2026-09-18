import React, { useRef } from "react";
import { motion } from "motion/react";
import resume from "../assets/Joshua_Oni_resume.pdf";
import myPic from "../assets/my_image1.jpg";
import BackgroundFX from "./BackgroundFX";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroSection() {
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-paper min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 sm:gap-12 lg:gap-16 text-ink px-4 sm:px-6 md:px-12 lg:px-20 py-8 lg:py-0 relative overflow-hidden"
    >
      <BackgroundFX variant="hero" />

      {/* subtle cursor-follow spotlight, desktop only */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="hidden lg:block pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(360px circle at var(--x, 50%) var(--y, 20%), rgba(31,75,63,0.07), transparent 70%)",
        }}
      />

      {/* Hero Text Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 max-w-4xl text-center lg:text-left order-2 lg:order-1 relative z-10"
      >
        <motion.p
          variants={item}
          className="text-gold font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4"
        >
          Frontend Developer
        </motion.p>

        <motion.div variants={item} className="flex flex-col mb-6 sm:mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-ink">
            Hi, I'm Joshua Oni
          </h1>
        </motion.div>

        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl text-muted mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
        >
          I build user interface modern web applications using React.js and
          Next.js, creating seamless user experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="#projects"
            className="bg-accent text-white px-7 py-3 rounded-full hover:bg-accent-light transition-colors duration-300 text-center font-medium"
          >
            View Projects
          </a>
          <a
            href={resume}
            download="resume"
            className="bg-transparent border border-line text-ink px-7 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 text-center font-medium"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="flex-shrink-0 order-1 lg:order-2 relative z-10"
      >
        <div className="relative">
          <img
            src={myPic}
            alt="Joshua Oni"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-paper object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer shadow-xl"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-accent/15"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
