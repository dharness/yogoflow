import { FC, ReactNode } from "react";
import styled from "styled-components/macro";

const Layout = styled.div`
  display: flex;
  width: 100%;
`;

interface TabBarProps {
  children: ReactNode;
  activeTabIndex: number;
}

const TabBar: FC<TabBarProps> = ({ children, activeTabIndex }) => {
  return <Layout>{children}</Layout>;
};

export default TabBar;
