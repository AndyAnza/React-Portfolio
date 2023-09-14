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
    <header className="pc-navbar bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only">Your Company</span>
          <a href="/" className="namePage">
            ANDREA<span className="font-semibold">ANZA</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
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
