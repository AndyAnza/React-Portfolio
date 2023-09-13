import { useState } from "react";
import "../css/MobileNavbar.css";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-container">
          <a href="/">AndreaAnza</a>
          <button onClick={toggleHandler} className="toggle-button">
            ○○○
          </button>
          <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
            <div className="nav-links">
              {/* <li>About Me</li> */}
              <a href="/portfolio">Portfolio</a>
              <a href="/skills">Skills</a>
              <a href="/resume">Resume</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MobileNavbar;
