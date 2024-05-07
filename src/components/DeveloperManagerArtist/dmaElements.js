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

export const Image = styled.img`
height: 300px;
width: auto;
`;

const ScrollAnimation =  keyframes`
0%,
20%,
50%,
80%,
100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-20px);
}
60% {
  transform: translateY(-10px);
}
`;

export const ScrollDown = styled(LinkScroll)` 
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;
`;

export const ScrollLink = styled.div`
display: flex;
align-items: center;
font-size: 1.3rem;
color: #f6f6f6;

img {
  height: 35px;
  width: 35px;
  margin-left: 6px;
}
`; 
