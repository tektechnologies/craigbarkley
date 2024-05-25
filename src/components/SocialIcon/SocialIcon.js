import React from 'react';
import SocialContainer from './StyleElements';
import ScrollAnimation from 'react-animate-on-scroll';

class SocialIcon extends React.Component {
  render() {
    return (
      <SocialContainer>
        <ScrollAnimation>
          <ul>
            <li>
              <a></a>
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