import React from "react";

function ProjectCard(props) {
  return (
    <div className="h-full bg-paper border border-line rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={props.image}
          alt={props.name}
          className="h-64 w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
        />
      </div>

      {/* Content */}
      <div className="py-5 px-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">
            {props.name}
          </h3>
          <p className="text-sm text-muted mb-5 leading-relaxed">
            {props.description}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={props.LiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-light transition-colors duration-300 cursor-pointer text-sm font-medium"
          >
            Live Demo
          </a>
          <a
            href={props.GitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-line text-ink px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
