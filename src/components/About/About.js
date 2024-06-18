import React from "react";
import { stackList } from "../../data/ClientData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/githubicon.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Craig Barkley</strong>. I'm originally from Illinois and have been living in Iowa for the past 12 years. During my time here, I have had numerous valuable experiences through several mangerial and software developer positions, enhancing my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            As a Software Developer and Tech Educator, I enjoyed bridging the gap between technical functionalities and aesthetic design. I participated in brainstorming sessions, pair programming, and design reviews to contribute creative ideas and solutions. I collaborated daily with team members and product owners to develop solutions while also creating visually appealing graphics to enhance user experience. 
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            As an Information Systems Manager, with a Bachelor of Science in MIS and A.A.S in Software Development and Web Technologies, along with experience as a web designer and business consultant; I enjoy working with others on helping them overcome technological barriers to create competitive advantages. 
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;