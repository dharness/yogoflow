import { FC } from "react";

interface LoadingWheelProps {
  percent: number;
}

const LoadingWheel: FC<LoadingWheelProps> = ({ percent }) => {
  return <div>{percent}</div>;
};

export default LoadingWheel;
