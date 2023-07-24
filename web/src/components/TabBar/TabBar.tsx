import { FC, ReactNode } from "react";
import styled from "styled-components/macro";

const Layout = styled.div`
  display: flex;
  width: 100%;
`;

interface TabBarProps {
  children: ReactNode;
}

const TabBar: FC<TabBarProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default TabBar;
