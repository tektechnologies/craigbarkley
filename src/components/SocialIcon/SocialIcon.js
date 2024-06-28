import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";

class SocialIcon extends React.Component {
  render() {
    const SocialContainer = styled.div`
      position: fixed;
      top: 48%;
      left: 1.5rem;
      transform: translateY(-50%);

      ul {
        display: block;
      }
      .item + .item {
        margin-top: 1rem;
      }
      a {
        font-size: 2.3rem;
        color: rgb(119, 119, 121);
        &:hover {
          color: rgb(203,108,181);;
        }
      }
      @media screen and (max-width: 1000px) {
        margin-top: 2rem;
        position: relative;
        top: 0;
        left: 0;
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
        }
        a {
          font-size: 2.5rem;
          color: #151418;
          &:hover {
            color: rgb(57, 134, 250);
          }
        }
        .item + .item {
          margin-top: 0;
          margin-left: 2rem;
        }
      }
    `;
    return (
      <SocialContainer>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <ul>
            <li className="item">
              <a
                href="https://www.linkedin.com/in/craig-barkley-25017b65/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin  size={70}/>
              </a>
            </li>
            <li className="item">
              <a
                href="https://github.com/tektechnologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub  size={70}/>
              </a>
            </li>
          </ul>
        </ScrollAnimation>
      </SocialContainer>
    );
  }
}

export default SocialIcon;
