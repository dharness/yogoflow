import { FC } from "react";
import styled from "styled-components/macro";

const Circle = styled.div<{ $isActive: boolean }>`
  background: ${(props) => (props.$isActive ? "#6706CE" : "#E9E4EF")};
  color: ${(props) => (props.$isActive ? "white" : "#B1AAB7")};
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
