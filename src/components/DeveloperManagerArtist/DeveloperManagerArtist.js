import React from "react";
import Dropdown from "../DropdownNav/DropdownNav";
import Header from "../Header/Header";
import {
  DmaContainter,
  DmaWrapper,
  DmaLeft,
  DmaRight,
  // Image,
  // ScrollDown,
  // ScrollLink,
} from "./DevElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

class DeveloperManagerArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showSubtitle: false,
      showScrollDown: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    //  showScrollDown ~ WIP
    const { isOpen, showSubtitle } = this.state;
    console.log(this.state);

    return (
      <main>
        <Dropdown isOpen={isOpen} toggle={this.toggle} />
        <Header toggle={this.toggle} />
        <DmaContainter>
          <DmaWrapper>
            <DmaLeft>
              <ScrollAnimation animateIn="fadeIn">
                <TypeAnimation 
                  cursor={false}
                  sequence={[
                    'Hi, I\'m Craig',
                    () => this.setState({ showSubtitle: true})
                  ]}
                  speed={{type: 'keyStrokeDelayInMs', value: 150}}
                  wrapper="h1"
                  repeat={0}
                 / >
                 {
                  showSubtitle && 
                  <TypeAnimation 
                    cursor={true}
                    sequence={[
                      500,
                      'A Full-Stack Developer',
                      1000,
                      'A SIU graduate.', 1000,
                      'A Kirkwood graduate.', 1000,
                      'A DeltaV Code Boot Camp graduate', 1000,
                      'A Technology Instructor at Kirkwood Community College', 1000,
                      'I am a Veteran', 1000,



                    ]}
                    speed={50}
                    deletionSpeed={65}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                 }
              </ScrollAnimation>
              
            </DmaLeft>

            <DmaRight></DmaRight>
          </DmaWrapper>
        </DmaContainter>
      </main>
    );
  }
}

export default DeveloperManagerArtist;
