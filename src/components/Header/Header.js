import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <Logo to="/">
            <img src='/craig-Emoji.png' alt='logo' />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects">Projects</NavLink>
            <NavLink className="menu-item" to="about">About</NavLink>
            <NavLink className="menu-item" to="contact">Contact</NavLink>
          </NavMenu>
          <NavBtn>
            <a>Resume</a>
          </NavBtn>
          <Bars />
        </Nav>
      </div>
    );
  }
}

export default Header;
