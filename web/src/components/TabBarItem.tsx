import { FC } from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import TabBarIndicator from "./TabBarIndicator";
import { fonts, palette } from "../utils/styleHelpers";

const getFontColor = (isActive: boolean, enabled: boolean) => {
  if (isActive) {
    return palette.greys.black;
  }
  return enabled ? palette.greys.black : palette.greys.shade40;
};

const StyledTabBarItem = styled.div<{ $isActive: boolean; $enabled: boolean }>`
  height: 50px;
  width: 100%;
  font-family: ${fonts.inter};
  font-weight: 900;
  font-size: 15px;
  display: flex;

  color: ${({ $isActive, $enabled }) => getFontColor($isActive, $enabled)};
  flex-direction: column;
  cursor: ${({ $enabled }) => ($enabled ? "pointer" : "default")};
  :hover {
    background: ${({ $enabled }) => ($enabled ? palette.greys.shade10 : "")};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 35px;
  flex: 1;
`;

interface TabBarItemProps {
  enabled?: boolean;
  title: string;
  symbol: string;
  isActive?: boolean;
  onClick: () => void;
}

const TabBarItem: FC<TabBarItemProps> = ({
  enabled = false,
  title,
  symbol,
  onClick,
  isActive = false,
}) => {
  return (
    <StyledTabBarItem
      $enabled={enabled}
      $isActive={isActive}
      onClick={() => enabled && onClick()}
    >
      <TabBarIndicator isActive={isActive} />
      <Content>
        <Circle symbol={symbol} isActive={isActive} />
        {title}
      </Content>
    </StyledTabBarItem>
  );
};

export default TabBarItem;
