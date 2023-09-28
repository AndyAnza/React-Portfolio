import "../css/navBar.css";

const URLpathsProperties = [
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <header className="pc-navbar">
      <nav className="navBar">
        <div>
          <a href="/" className="namePage">
            ANDREA<span className="font-semibold">ANZA</span>
          </a>
        </div>

        <div>
          {URLpathsProperties.map((property) => (
            <a key={property.path} href={property.path} className="navPages">
              {property.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
