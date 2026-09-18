import React from "react";
import Reveal from "./Reveal";

function Skill() {
  const skills = [
    { name: "HTML", icon: "/icons/html5.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Next.js", icon: "/icons/nextjs-48.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "Git", icon: "/icons/git.png" },
    { name: "GitHub", icon: "/icons/github.png" },
  ];

  return (
    <div
      id="skills"
      className="bg-ivory text-ink py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <Reveal>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold mb-10 sm:mb-14 md:mb-16">
          My Skills
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 0.05}>
            <div className="flex flex-col items-center group hover:-translate-y-1 transition-all duration-300">
              <div className="p-2 sm:p-3 md:p-4 rounded-xl bg-paper border border-line group-hover:border-accent transition-colors duration-300 mb-2 sm:mb-3 md:mb-4 shadow-sm">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-all duration-300"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-center text-muted group-hover:text-accent transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Skill;
