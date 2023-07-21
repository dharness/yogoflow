import styled from "styled-components";
import PanelTitleBar from "./PanelTitleBar";
import { FC, ReactNode } from "react";

const PanelContent = styled.div`
  height: 100%;
  padding: 25px;
  align-items: end;
`;

const StyledPanel = styled.div`
  background: white;
  width: 680px;
  height: 550px;
  display: flex;
  flex-direction: column;
  margin: 0px auto 0px auto;
  border-radius: 20px;
  overflow: hidden;
`;

interface PanelProps {
  children: ReactNode;
  titleText: string;
  onCloseClick: () => void;
}

const Panel: FC<PanelProps> = ({ titleText, onCloseClick, children }) => {
  return (
    <>
      <StyledPanel>
        <PanelTitleBar
          titleText={titleText}
          onCloseClick={onCloseClick}
        ></PanelTitleBar>
        <PanelContent>{children}</PanelContent>
      </StyledPanel>
    </>
  );
};

export default Panel;
