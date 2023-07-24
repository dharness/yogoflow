import { FC } from "react";
import styled from "styled-components/macro";
import { palette } from "../utils/styleHelpers";

const Circle = styled.div<{ $isActive: boolean }>`
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
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
`;

interface SymbolIconProps {
  symbol: string;
  isActive: boolean;
}

const SymbolIcon: FC<SymbolIconProps> = ({ symbol, isActive }) => {
  return <Circle $isActive={isActive}>{symbol}</Circle>;
};

export default SymbolIcon;
