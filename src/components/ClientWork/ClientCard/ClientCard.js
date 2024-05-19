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
        ClientList.map((list, index) => (
          <ScrollAnimation>
            <Card>
              <CardLeft>

              </CardLeft>
              <CardRight>
                
              </CardRight>
            </Card>
          </ScrollAnimation>
        ))
      </>
    )
  }
}


export default ClientCard;