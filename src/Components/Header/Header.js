import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="app__header">
      <div className="header-container">
        <nav className="nav-section">
          <div className="navbar-section-logo">Logo</div>
          <ul className="navbar-lists">
            <li className="navbar-item">Explore</li>
            <li className="navbar-item">Message</li>
            <li className="navbar-item">Notification</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
