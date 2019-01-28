import React from 'react';



const NavBar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_logo"><a href="/">THE LOGO</a></div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default NavBar