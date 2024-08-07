import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(119, 119, 121);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

class DropdownNav extends React.Component {
  render() {
    const { isOpen, toggle } = this.props;
    return (
      <SiderBar isOpen={isOpen} onClick={() => toggle}>
        <CloseIcon onClick={toggle} />
        <NavMenu>
          <NavLink 
            to="projects"
            className="menu-item"
            onClick={toggle}
            >
            Projects
          </NavLink>
          <NavLink 
            to="about"
            className="menu-item"
            onClick={toggle}
            >
            About
            </NavLink>
          <NavLink
           to="contact"
           className="menu-item"
           onClick={toggle}
           >
           Contact
           </NavLink>
        </NavMenu>
        <NavBtn onClick={toggle}>
          <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/craig-barkley-25017b65/"
            target="_blanck"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
      </SiderBar>
    );
  }
}

export default DropdownNav;
