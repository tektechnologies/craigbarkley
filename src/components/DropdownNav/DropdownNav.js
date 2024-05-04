import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from '@emotion/styled';

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

class DropdownNav extends React.Component {
  render() {
    return (
      <div>DropdownNav</div>
    )
  }
}

export default DropdownNav;