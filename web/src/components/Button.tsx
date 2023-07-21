import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #6706ce;
  outline: none;
  border: none;
  font-size: 26px;
  font-family: "Dongle", sans-serif;
  font-weight: 500;
  color: white;
  padding: 8px 20px 8px 20px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    transform: scale(1.01);
  }
`;

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
