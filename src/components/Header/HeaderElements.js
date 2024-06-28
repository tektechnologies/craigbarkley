import { FaBars } from 'react-icons/fa';
// https://react-icons.github.io/react-icons/search/#q=fabars
import { Link as ScrollLink } from 'react-scroll';
import styled from '@emotion/styled';

// background: transparent;
export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119,121);
  display: flex;
  font-size: 2.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &hover {
    color: #f6f6f6;
  }
`;

export const Logo = styled('div')`
img{
  width: 75px;
  height: 75px;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px){
    display: block;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  ${'' /* align-items: center; */}
  ${'' /* margin-right: -24px; */}
  .menu-item + .menu-item {
    margin-left: 3rem;
  }
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtn = styled.div`
 
  ${'' /* display: flex; */}
  ${'' /* align-items: center; */}
  ${'' /* margin-right: 14px; */}
  @media screen and (max-width: 768px){
    display: none;
  }
`;
