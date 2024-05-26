import React from "react";
import Dropdown from "../DropdownNav/DropdownNav";
import Header from "../Header/Header";
import {
  DmaContainter,
  DmaWrapper,
  DmaLeft,
  DmaRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./DevElements";
import { TypeAnimation } from "react-type-animation";
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
    const { isOpen, showSubtitle, showScrollDown } = this.state;
    // console.log(this.state);
    // console.log('modal  props (): ', this.props.displayForm);
    return (
      <main>
        <Dropdown isOpen={isOpen} toggle={this.toggle} />
        <Header toggle={this.toggle}  displayForm={this.props.displayForm} />
        <DmaContainter>
          <DmaWrapper>
            <DmaLeft>
              <ScrollAnimation animateIn="fadeIn">
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    "Hi, I'm Craig",
                    () => this.setState({ showSubtitle: true }),
                    // () => this.setState({ showScrollDown: true }),
                  ]}
                  speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                  wrapper="h1"
                  repeat={0}
                />
                {showSubtitle && (
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      500,
                      "A Full-Stack Developer",
                      1000,
                      "A Southern Illinois University graduate",
                      1000,
                      "A Kirkwood Community College graduate",
                      1000,
                      "A DeltaV Code Boot Camp graduate",
                      1000,
                      "A Manager and Artist",
                      1000,
                      // "A Technology Instructor at Kirkwood Community College",
                      // 1000,
                      () => this.setState({ showScrollDown: true }),
                    ]}
                    speed={50}
                    deletionSpeed={65}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                )}
              </ScrollAnimation>
            </DmaLeft>

            <DmaRight>
              <ScrollAnimation animateIn="fadeIn">
                <Image src="/githubicon.png" alt="man" />
              </ScrollAnimation>
            </DmaRight>
          </DmaWrapper>

          {showScrollDown && (
            <ScrollAnimation animateIn="fadeIn" offset={0}>
              <ScrollDown to="clients" id="scrollDownToProjects">
                <ScrollLink>
                  Scroll Down
                  <img src="/scroll-down.svg" alt="scroll icon" />
                </ScrollLink>
              </ScrollDown>
            </ScrollAnimation>
          )}
        </DmaContainter>
      </main>
    );
  }
}

export default DeveloperManagerArtist;
