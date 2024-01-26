import "../css/skills.css";
import html from "../assets/skillsIcons/html.png";
import css from "../assets/skillsIcons/css.png";
import javascript from "../assets/skillsIcons/javascript.png";
import typescript from "../assets/skillsIcons/typescript.png";
import node from "../assets/skillsIcons/node.png";
import express from "../assets/skillsIcons/express.png";
import react from "../assets/skillsIcons/react.png";
import tailwind from "../assets/skillsIcons/tailwind.png";
import bootstrap from "../assets/skillsIcons/bootstrap.png";
import sql from "../assets/skillsIcons/sql.png";
import mongoDB from "../assets/skillsIcons/mongoDB.png";
import git from "../assets/skillsIcons/git.png";
import windows from "../assets/skillsIcons/windows.png";
import jest from "../assets/skillsIcons/jest.png";

const technologies = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: javascript },
  { name: "TypeScript", image: typescript },
  { name: "Node.js", image: node },
  { name: "Express.js", image: express },
  { name: "React", image: react },
  { name: "Tailwind", image: tailwind },
  { name: "Bootstrap", image: bootstrap },
  { name: "SQL", image: sql },
  { name: "MongoDB", image: mongoDB },
  { name: "Git", image: git },
  { name: "Windows", image: windows },
  { name: "Jest", image: jest },
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
