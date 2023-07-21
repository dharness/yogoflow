import styled from "styled-components/macro";
import PanelTitleBar from "./PanelTitleBar";
import { FC, ReactNode } from "react";

const PanelContent = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledPanel = styled.div`
  background: white;
  width: 700px;
  height: 570px;
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
    <StyledPanel>
      <PanelTitleBar
        titleText={titleText}
        onCloseClick={onCloseClick}
      ></PanelTitleBar>
      <PanelContent>{children}</PanelContent>
    </StyledPanel>
  );
};

export default Panel;
