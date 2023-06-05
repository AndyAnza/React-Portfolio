import React from "react";
import profinder from "../assets/profinder.png";
import localeats from "../assets/localeats.png";
import techblog from "../assets/techblog.png";

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
    name: "Tech-Blog",
    url: "https://devblog.herokuapp.com/",
    img: techblog,
    description: "Project description for ProFinder",
    repo: "https://github.com/AndyAnza/Tech-Blog-C16",
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
        className="text-4xl font-bold tracking-tight sm:text-6xl mx-auto max-w-7xl px-6 lg:px-8 mb-2 mt-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        id="portfolio"
      >
        Projects
      </h2>
      <p className="text-white sm:text-2xl mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        Check out all the projects I've been working on on my{" "}
        <a href="https://github.com/AndyAnza" className="text-white">
          Github Page
        </a>
      </p>

      <div
        className="grid grid-cols-2 gap-12 mx-auto max-w-6xl lg:px-10"
        id="card-gallery-container"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-full h-96"
            id="card"
          >
            <div className="relative">
              <a href={project.url}>
                <img
                  src={project.img}
                  alt="Background"
                  className="w-full h-64 object-cover"
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
