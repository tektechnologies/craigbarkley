import { FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import styled from '@emotion/styled';


export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119,121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &hover {
    color: #f6f6f6;
  }
`;

// export const = styled.``;
// export const = styled.``;
// export const = styled.``;
// export const = styled.``;