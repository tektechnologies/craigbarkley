import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

class Header extends React.Component {
  render() {
    const { toggle } = this.props;
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
            <a
              className='btn PrimaryBtn'
              href="https://www.linkedin.com/in/craig-barkley-25017b65/"
              target="_blank"
              rel="noopener noreferrer"
            >Resume</a>
          </NavBtn>
          <Bars onClick={toggle}/>
        </Nav>
      </div>
    );
  }
}

export default Header;
