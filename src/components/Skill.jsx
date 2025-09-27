import React from "react";

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
      className="bg-[#111827] text-white py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 sm:mb-10 md:mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-2 sm:p-3 md:p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300 mb-2 sm:mb-3 md:mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-medium text-center group-hover:text-[#3676de] transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
