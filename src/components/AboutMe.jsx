import "../css/aboutMe.css";
import ProfilePic from "../assets/profilepic.png";

const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/andrearamirezanza/" },
  { name: "Instagram", href: "https://www.instagram.com/andyanza" },
  { name: "Github", href: "https://github.com/AndyAnza" },
];

export default function AboutMe() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="about-me">
          <div className="sm:w-2/3">
            <h2
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl "
              id="about-me"
              style={{
                background:
                  "linear-gradient(to right, #5f3dc4, #9138b3, #d74391)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Hi! I'm Andrea,
            </h2>
            <p className="mt-6  text-gray-300">
              as a certified full-stack web developer, I thrive in fast-paced
              environments, love collaborating with teams, and specialize in
              creating seamless web experiences.
              <br />
              Explore my portfolio and let's connect to create web solutions.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a
                  data-text="Awesome"
                  className="button"
                  href={link.href}
                  key={link.name}
                >
                  <span className="actual-text">&nbsp;{link.name}&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">
                    &nbsp;{link.name}&nbsp;
                  </span>
                </a>
                // <a
                //   key={link.name}
                //   href={link.href}
                //   className="about-me-links transition duration-150 ease-in-out delay-75 hover:text-purple-500"
                // >
                //   {link.name} <span aria-hidden="true">&rarr;</span>
                // </a>
              ))}
            </div>
          </div>
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="sm:mt-0 sm:w-1/3"
          />
        </div>
      </div>
    </div>
  );
}