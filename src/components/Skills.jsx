import "../css/skills.css";
import html from "../assets/skillsIcons/html.png";
import css from "../assets/skillsIcons/css.png";
import javascript from "../assets/skillsIcons/javascript.png";
import node from "../assets/skillsIcons/node.png";
import express from "../assets/skillsIcons/express.png";
// import mongoose from "../assets/skillsIcons/mongoose.png";
import react from "../assets/skillsIcons/react.png";
import git from "../assets/skillsIcons/git.png";
import windows from "../assets/skillsIcons/windows.png";
import tailwind from "../assets/skillsIcons/tailwind.png";

const technologies = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: javascript },
  { name: "Node.js", image: node },
  { name: "Express.js", image: express },
  //   { name: "Mongoose", image: mongoose },
  { name: "React", image: react },
  { name: "Git", image: git },
  { name: "Windows", image: windows },
  { name: "Tailwind", image: tailwind },
];

function Skills() {
  return (
    <div className="tech-main-container">
      <h2
        className="lg: bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        id="portfolio"
      >
        My Tech Stack
      </h2>
      <div className="tech-container grid grid-cols-4">
        {technologies.map((property) => (
          <div key={property.name} className=" stack-btn">
            <img src={property.image} alt={property.image} />

            <h3>{property.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
