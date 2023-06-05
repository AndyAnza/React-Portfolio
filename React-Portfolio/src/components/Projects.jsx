import React from "react";
import profinder from "../assets/profinder.png";
import localeats from "../assets/localeats.png";

const projects = [
  {
    name: "ProFinder",
    url: "https://profinder-dev.herokuapp.com",
    img: profinder,
    description: "Project description for ProFinder",
    repo: "https://github.com/AndyAnza/profinder",
  },
  {
    name: "localeats",
    url: "https://localeats.herokuapp.com/",
    img: localeats,
    description: "Project description for Project 2",
    repo: "https://github.com/AndyAnza/localeats",
  },
  {
    name: "ProFinder",
    url: "https://example.com/profinder",
    img: "profinder-image.jpg",
    description: "Project description for ProFinder",
    repo: "https://github.com/AndyAnza/profinder",
  },
  {
    name: "Project 2",
    url: "https://example.com/project2",
    img: "project2-image.jpg",
    description: "Project description for Project 2",
    repo: "https://github.com/AndyAnza/profinder",
  },
];

const Card = () => {
  return (
    <div>
      <h2
        className="text-4xl font-bold tracking-tight text-white sm:text-6xl  mx-auto max-w-7xl px-6 lg:px-8 mb-10 mt-40"
        id="portfolio"
      >
        Projects
      </h2>

      <div className="grid grid-cols-2 gap-4 mx-auto  max-w-7xl px-6 lg:px-8 mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mx-auto w-96 h-96 bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative">
              <a href={project.url}>
                <img
                  className="w-full h-full object-cover"
                  src={project.img}
                  alt="Background"
                />
              </a>
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute bottom-0 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">
                  {project.name}
                </h2>
                <p className="mt-2 text-gray-200">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
