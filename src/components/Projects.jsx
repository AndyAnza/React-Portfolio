import profinder from "../assets/projectsImages/profinder.png";
import localeats from "../assets/projectsImages/localeats.png";
import techblog from "../assets/projectsImages/techblog.png";
import weatherforecast from "../assets/projectsImages/weatherforecast.png";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const projects = [
  {
    name: "ProFinder",
    url: "https://profinder-dev.herokuapp.com",
    img: profinder,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: [
      "React",
      "GraphQL",
      "TailwindCSS",
      "Mongoose",
      "MongoDB",
      "JavaScript",
      "Node",
      "Express",
      "HTML",
    ],
    repo: "https://github.com/AndyAnza/profinder",
  },
  {
    name: "localeats",
    url: "https://localeats.herokuapp.com/",
    img: localeats,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "Node",
      "Express",
      "SQL",
      "Sequelize",
      "Bcrypt",
    ],
    repo: "https://github.com/AndyAnza/localeats",
  },
  {
    name: "Tech-Blog",
    url: "https://devblog.herokuapp.com/",
    img: techblog,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["JavaScript", "Node", "Express", "Handlebars", "Sequelize"],
    repo: "https://github.com/AndyAnza/Tech-Blog-C16",
  },
  {
    name: "Weather-Forecast",
    url: "https://andyanza.github.io/Weather-Forecast",
    img: weatherforecast,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["JavaScript", "HTML", "CSS", "Node", "Express"],
    repo: "https://github.com/AndyAnza/Weather-Forecast",
  },
];

const Cards = () => {
  return (
    <>
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
          className="text-white transition duration-150 ease-in-out delay-75 hover:text-purple-500"
        >
          Github Page
        </a>
      </p>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "80vh",
          height: "60vh",
          backgroundColor: "white",
          // margin: "0 40px 0 40px",
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} id="card">
            <Card style={{ width: "80vh", height: "60vh" }}>
              <CardMedia
                component="img"
                alt="project"
                style={{ objectFit: "cover", height: "35vh" }}
                image={project.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <ul style={{ display: "flex", marginTop: "4px" }}>
                  {" "}
                  {`Technologies: `}
                  {project.technologies.map((technology, techIndex) => (
                    <li
                      style={{ fontSize: "0.9rem", marginRight: "0.5rem" }}
                      key={techIndex}
                    >
                      {`${technology}`}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white py-1 px-4 rounded hover:bg-purple-600 mr-2"
                >
                  Visit Website
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white py-1 px-4 rounded hover:bg-purple-600"
                >
                  Github Repo
                </a>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cards;
