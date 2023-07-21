import styled from "styled-components/macro";
import xIconPath from "../assets/x-icon.svg";
import { FC } from "react";

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

const CancelButton = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  background-color: #e9e4ef;
  :hover {
    background-color: #e4dfea;
  }
`;

interface PanelTitleBarProps {
  titleText: string;
  onCloseClick: () => void;
}

const PanelTitleBar: FC<PanelTitleBarProps> = ({ titleText, onCloseClick }) => {
  return (
    <StyledPanelTitleBar>
      <Title>{titleText}</Title>
      <CancelButton onClick={onCloseClick}>
        <img src={xIconPath} />
      </CancelButton>
    </StyledPanelTitleBar>
  );
};

export default PanelTitleBar;
