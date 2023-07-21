import { FC, ReactNode } from "react";

interface StagesBarProps {
  children: ReactNode;
}

const StagesBar: FC<StagesBarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default StagesBar;
