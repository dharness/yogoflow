import styled from "styled-components/macro";
import xIconPath from "../assets/x-icon.svg";
import { FC } from "react";
import { palette } from "../utils/styleHelpers";

const StyledPanelTitleBar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 38px;
  font-family: "Dongle", sans-serif;
  font-weight: 700;
  margin-top: 10px;
`;

interface PanelTitleBarProps {
  titleText: string;
}

const PanelTitleBar: FC<PanelTitleBarProps> = ({ titleText }) => {
  return (
    <StyledPanelTitleBar>
      <Title>{titleText}</Title>
    </StyledPanelTitleBar>
  );
};

export default PanelTitleBar;
