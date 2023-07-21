import { FC } from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import TabBarIndicator from "./TabBarIndicator";

const StyledTabBarItem = styled.div<{ $isActive: boolean }>`
  height: 50px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  :hover {
    background: #f8f6fb;
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
  id: string;
  title: string;
  symbol: string;
  isActive?: boolean;
  onClick: (id: string) => void;
}

const TabBarItem: FC<TabBarItemProps> = ({
  id,
  title,
  symbol,
  onClick,
  isActive = false,
}) => {
  return (
    <StyledTabBarItem $isActive={isActive} onClick={() => onClick(id)}>
      <TabBarIndicator isActive={isActive} />
      <Content>
        <Circle symbol={symbol} isActive={isActive} />
        {title}
      </Content>
    </StyledTabBarItem>
  );
};

export default TabBarItem;
