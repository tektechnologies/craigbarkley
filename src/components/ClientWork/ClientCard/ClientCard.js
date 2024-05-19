import React from 'react';
import { ClientList } from '../../../data/ClientData';
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from './ClientCardElements';
import ScrollAnimation from 'react-animate-on-scroll';





 class ClientCard extends React.Component {
  render() {
    return (
      <>
       {ClientList.map((list, index) => (
          <ScrollAnimation animateIn="fadeInLeft" key={index}>
            <Card>
              <CardLeft>
                <img src={list.img} alt={list.name} />
              </CardLeft>
              <CardRight>
              <h4>{list.title}</h4>
              <p></p>
              <TechCardContainer>

              </TechCardContainer>
              <BtnGroup>

              </BtnGroup>
              </CardRight>
            </Card>
          </ScrollAnimation>
        ))}
      </>
    )
  }
}


export default ClientCard;