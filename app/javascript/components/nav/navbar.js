import React from 'react';

const NavBar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_logo"><a href="/">STARBOARD</a></div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li><a href="/">Schedule</a></li>
          <li><a href="/">Profile</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default NavBar