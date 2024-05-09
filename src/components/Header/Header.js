import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <Logo to="/">
            <img />
          </Logo>
          <NavMenu>
            <NavLink>Projects</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
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
