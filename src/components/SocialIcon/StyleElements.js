import { IconButton, styled } from "@mui/material";
// Tooltip,
import { MdKeyboardArrowUp } from "react-icons/md";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
  }
  .item + .item {
  }
  a {
    &:hover {
    }
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: whitesmoke;
  padding: 10px;
`;

export const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #007bff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;
