import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="navBar">
      <div className="leftMenu">
        <button
          className="menuButton"
          onClick={() => handleMenuButtonClick("about")}>
          About Me
        </button>
      </div>
      <div className="rightMenu">
        <button
          className="menuButton"
          onClick={() => handleMenuButtonClick("projects")}>
          Projects
        </button>
        <button
          className="menuButton"
          onClick={() => handleMenuButtonClick("contact")}>
          Contact
        </button>
      </div>
    </header>
  );
}

function handleMenuButtonClick(page) {
  console.log(`Navigating to ${page}`);
  // Here you can add your logic to navigate or scroll to the appropriate section
}

export default Header;
