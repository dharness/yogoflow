import { FC } from "react";
import styled from "styled-components/macro";
import { palette } from "../../utils/styleHelpers";

const StyledActivePageBar = styled.div`
  width: 100%;
  height: 1.5px;
  position: relative;
`;

const ColorBar = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.$isActive ? palette.purples.shade70 : palette.greys.shade20};
  position: absolute;
`;

interface TabBarIndicator {
  isActive: boolean;
}

const TabBarIndicator: FC<TabBarIndicator> = ({ isActive }) => {
  return (
    <StyledActivePageBar>
      <ColorBar $isActive={isActive}></ColorBar>
    </StyledActivePageBar>
  );
};

export default TabBarIndicator;
