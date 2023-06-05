import React from "react";

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
        <div className="mx-auto max-w-2xl lg:mx-0">
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
            Hi! I'm Andrea
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            a passionate web developer with 5 years of experience. I specialize
            in front-end development using HTML, CSS, and JavaScript. I'm always
            excited to learn new technologies and create innovative web
            solutions.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
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
