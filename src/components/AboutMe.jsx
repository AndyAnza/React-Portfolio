import ProfilePic from "../assets/profilePic/profilepic.png";
import Randombutton from "./GreenButton";
import "../css/aboutMe.css";
import "../css/greenButton.css";

const links = [
  { text: "LinkedIn", url: "https://www.linkedin.com/in/andrearamirezanza/" },
  { text: "Github", url: "https://github.com/AndyAnza" },
];

export default function AboutMe() {
  return (
    <div className="contentCard">
      <div className="textWrapper">
        <h2
          className="titleh2"
          id="about-me"
          style={{
            background: "linear-gradient(to right, #5f3dc4, #9138b3, #d74391)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {`Hi! I'm Andrea,`}
        </h2>
        <p className=" text-gray-300">
          as a certified full-stack web developer, I thrive in fast-paced
          environments, love collaborating with teams, and specialize in
          creating seamless web experiences.
        </p>
        <p className=" text-gray-300">
          Explore my portfolio and let's connect to create web solutions.
        </p>
        <Randombutton url={links[0].url} text={links[0].text} />
        <Randombutton url={links[1].url} text={links[1].text} />
      </div>
      <img src={ProfilePic} alt="Profile Picture" className="profilePicture" />
    </div>
  );
}
