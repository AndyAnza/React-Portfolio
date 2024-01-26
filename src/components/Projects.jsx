import profinder from "../assets/projectsImages/profinder.png";
import localeats from "../assets/projectsImages/localeats.png";
import techblog from "../assets/projectsImages/techblog.png";
import weatherforecast from "../assets/projectsImages/weatherforecast.png";
import pokedex from "../assets/projectsImages/pokedex.png";
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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/projects.css";

const projects = [
  {
    name: "ProFinder",
    url: "https://profinder-dev.herokuapp.com",
    img: profinder,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    aspectratio: 523 / 311,
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
    aspectratio: 1436 / 875,
  },
  {
    name: "Tech-Blog",
    url: "https://devblog.herokuapp.com/",
    img: techblog,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["JavaScript", "Node", "Express", "Handlebars", "Sequelize"],
    repo: "https://github.com/AndyAnza/Tech-Blog-C16",
    aspectratio: 1783 / 924,
  },
  {
    name: "Weather-Forecast",
    url: "https://andyanza.github.io/Weather-Forecast",
    img: weatherforecast,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["JavaScript", "HTML", "CSS", "Node", "Express"],
    repo: "https://github.com/AndyAnza/Weather-Forecast",
    aspectratio: 2327 / 1342,
  },
  {
    name: "PokeDex",
    url: "https://pokedex-andyanza.vercel.app/",
    img: pokedex,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/AndyAnza/PokeDex",
    aspectratio: 1436 / 875,
  },
];

const Cards = () => {
  return (
    <div className="projects-container">
      <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <p className="text-gray-300 projectsSectionDescription">
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
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} id="card">
            <Card className="projectCard">
              <CardMedia
                component="img"
                alt="project"
                className="cardMedia"
                image={project.img}
                aspectratio={project.aspectratio}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="projectTitle"
                >
                  {project.name}
                </Typography>
                <div className="cardContent">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="projectDescription"
                  >
                    {project.description}
                  </Typography>
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginTop: "4px",
                    }}
                  >
                    {project.technologies.map((technology, techIndex) => (
                      <li
                        style={{ fontSize: "0.9rem", marginRight: "0.5rem" }}
                        key={techIndex}
                      >
                        {`${technology}`}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardActions className="cardActions">
                <Button
                  size="small"
                  onClick={() => {
                    window.location.href = project.url;
                  }}
                >
                  Visit Website
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = project.repo;
                  }}
                >
                  Github Repo
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
