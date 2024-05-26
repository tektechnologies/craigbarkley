import React from "react";
import { ClientList } from "../../../data/ClientData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ClientCardElements";

import ScrollAnimation from "react-animate-on-scroll";

class ClientCard extends React.Component {
  render() {
    return (
      <>
        {ClientList.map((list, index) => (
          <ScrollAnimation animateIn="fadeInLeft" key={index}>
            <Card>
              <CardLeft>
                <img src={list.img} alt={list.name} className="ImageSize" />
              </CardLeft>
              <CardRight>
                <h4>{list.title}</h4>
                <p>{list.description}</p>
                <TechCardContainer>
                  {list.tech_stack.map((tech, index) => (
                    <TechCard key={index}>{tech}</TechCard>
                  ))}
                </TechCardContainer>
                <BtnGroup>
                  {list.github_url.length > 0 && (
                    <a
                      className="btn SecondaryBtn btn-shadow"
                      href={list.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  )}
                  {list.demo_url.length > 0 && (
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href={list.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                </BtnGroup>
              </CardRight>
            </Card>
          </ScrollAnimation>
        ))}
      </>
    );
  }
}

export default ClientCard;

