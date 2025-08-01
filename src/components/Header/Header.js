import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
//import { Button } from "react-scroll";

class Header extends React.Component {
  render() {
    // console.log('props header', this.props.displayForm);
    const { toggle } = this.props;
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
          {/* <NavBtn>
            <Button className="btn PrimaryBtn" onClick={displayForm} rel="noopener noreferrer">
              New Project Request
            </Button>
          </NavBtn> */}
          <Bars onClick={toggle} />
        </Nav>
      </div>
    );
  }
}

export default Header;
