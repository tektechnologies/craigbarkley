import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

class Header extends React.Component {
  render() {
    // console.log('props header', this.props.displayForm);
    const { toggle, displayForm } = this.props;
    return (
      <div>
        <Nav>
          <Logo to="/">
            <img src="/githubicon.png" alt="logo" />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="clients">
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about">
              About
            </NavLink>
            <NavLink className="menu-item" to="contact">
              Contact
            </NavLink>
          </NavMenu>

          <NavBtn>
            <a
              className="btn PrimaryBtn"
              href="https://www.linkedin.com/in/craig-barkley-25017b65/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </NavBtn>
          <NavBtn>
            <p className="btn PrimaryBtn" onClick={displayForm}>
              New Project Request
            </p>
          </NavBtn>
          <Bars onClick={toggle} />
        </Nav>
      </div>
    );
  }
}

export default Header;
