import React from "react";
import ProfilePic from "../assets/profilepic.png";

const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/andrearamirezanza/" },
  { name: "Instagram", href: "https://www.instagram.com/andyanza" },
  { name: "Github", href: "https://github.com/AndyAnza" },
];
const technologies = [
  { name: "Html", value: "Html" },
  { name: "CSS", value: "CSS" },
  { name: "Javascript", value: "Javascript" },
  { name: "Node.js", value: "Node.js" },
  { name: "Express.js", value: "Express.js" },
  { name: "Mongoose", value: "Mongoose" },
  { name: "React", value: "React" },
  { name: "Git", value: "git" },
];

export default function AboutMe() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center mx-auto max-w-6xl lg:mx-0">
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
            <p className="mt-6 text-lg leading-8 text-gray-300">
              a certified full-stack web developer fresh out of a rigorous
              bootcamp. With a passion for technology and a solid foundation in
              front-end and back-end development, I specialize in creating
              seamless and engaging web experiences. I thrive in fast-paced
              environments, love collaborating with teams, and enjoy bringing
              ideas to life. Explore my portfolio to see examples of my work,
              and let's connect to discuss how we can create exceptional web
              solutions together.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-red-600"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="ml-4 mt-8 sm:mt-0 sm:w-1/3"
          />
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
