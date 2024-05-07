import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll';

export const DmaContainter = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  ${'' /* https://getbootstrap.com/docs/4.1/layout/overview/ */}
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const DmaWrapper = styled.``;

export const DmaLeft = styled.``;

export const DmaRight =  styled.``;

export const Image = styled.img``;

const ScrollAnimation = keyframes``;

export const ScrollDown = styled(LinkScroll)``;

export const ScrollLink = style.div``; 
