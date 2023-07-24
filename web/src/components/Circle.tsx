import { FC } from "react";
import styled from "styled-components/macro";
import { fonts, palette } from "../utils/styleHelpers";

const CircleSymbol = styled.div<{ $isActive: boolean }>`
  background: ${(props) =>
    props.$isActive ? palette.purples.shade70 : palette.greys.shade20};
  color: ${(props) =>
    props.$isActive ? palette.greys.white : palette.greys.shade45};
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${fonts.inter};
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
`;

interface CircleProps {
  symbol: string;
  isActive: boolean;
}

const Circle: FC<CircleProps> = ({ symbol, isActive }) => {
  return <CircleSymbol $isActive={isActive}>{symbol}</CircleSymbol>;
};

export default Circle;
