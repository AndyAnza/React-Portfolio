import React from "react";
import profinder from "../assets/profinder.png";
import localeats from "../assets/localeats.png";
import techblog from "../assets/techblog.png";
import weatherforecast from "../assets/weatherforecast.png";

const projects = [
  {
    name: "ProFinder",
    url: "https://profinder-dev.herokuapp.com",
    img: profinder,
    description: "",
    repo: "https://github.com/AndyAnza/profinder",
  },
  {
    name: "localeats",
    url: "https://localeats.herokuapp.com/",
    img: localeats,
    description: "",
    repo: "https://github.com/AndyAnza/localeats",
  },
  {
    name: "Tech-Blog",
    url: "https://devblog.herokuapp.com/",
    img: techblog,
    description: "",
    repo: "https://github.com/AndyAnza/Tech-Blog-C16",
  },
  {
    name: "Weather-Forecast",
    url: "https://andyanza.github.io/Weather-Forecast",
    img: weatherforecast,
    description: "",
    repo: "https://github.com/AndyAnza/Weather-Forecast",
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
      <p className="text-gray-300 sm:text-lg mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        Check out all the projects I've been working on on my{" "}
        <a
          href="https://github.com/AndyAnza"
          className="text-white hover:text-red-500"
        >
          Github Page
        </a>
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-auto max-w-6xl lg:px-10"
        id="card-gallery-container"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-full h-64 relative border border-neutral-600"
            id="card"
          >
            <img
              src={project.img}
              alt="Background"
              className="w-full h-64 object-cover cursor-pointer"
            />
            <div className="absolute bottom-0 w-full py-2 bg-black opacity-80 pl-2">
              <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              <p className="mb-2 text-gray-200">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 mr-2"
              >
                Visit Website
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
              >
                Github Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
