import React from "react";

function ProjectCard(props) {
  return (
    <div className="bg-[#1f2937] rounded-xl shadow-lg overflow-hidden flex flex-col">
      {/* Image */}
      <div>
      <img src={props.image} alt='{title}' className="h-70 w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
      </div>

      {/* Content */}
      <div className="py-4 px-6 flex flex-col flex-grow justify-between">
        <h3 className="text-lg font-semibold text-white mb-2">{props.name}</h3>
        <p className="text-sm font-medium text-gray-400 mb-4">{props.description}</p>
        <div className="flex gap-3">
          <a
            href={props.LiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Live Demo
          </a>
          <a
            href={props.GitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-300 cursor-pointer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
