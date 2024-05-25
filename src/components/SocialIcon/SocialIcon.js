import React from 'react';
import SocialContainer from './StyleElements';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

class SocialIcon extends React.Component {
  render() {
    return (
      <SocialContainer>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
          <ul>
            <li className='item'> 
              <a
                href="https://www.linkedin.com/in/craig-barkley-25017b65/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </ScrollAnimation>
      </SocialContainer>
    )
  }
}

export default SocialIcon;