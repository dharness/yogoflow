import { FC } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { fonts, palette } from "../utils/styleHelpers";
import loadingIcon from "../assets/loading-icon.svg";
import { CircularProgressbarStyles } from "react-circular-progressbar/dist/types";

const LoadingText = styled.div`
  text-align: center;
  color: ${palette.greys.black};
  font-family: ${fonts.inter};
  font-size: 19px;
  font-weight: 700;
  margin-top: 30px;
  margin-left: 12px;
`;

const LoadingWheelWrapper = styled.div`
  margin-top: 20px;
  width: 165px;
  font-family: ${fonts.dongle};
`;

const LoadingIcon = styled.img`
  width: 48px;
  margin-top: 20px;
`;

const PercentText = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 8px;
`;

const LinearGradientSvg = styled.svg`
  position: absolute;
`;

interface LoadingWheelProps {
  percent: number;
}

const wheelStyles: CircularProgressbarStyles = {
  path: {
    stroke: "url(#loading-gradient)",
    transition: "all 0.5s ease 0s",
  },
  trail: {
    stroke: palette.greys.shade20,
  },
};

const LoadingWheel: FC<LoadingWheelProps> = ({ percent }) => {
  return (
    <LoadingWheelWrapper>
      <CircularProgressbarWithChildren
        value={percent}
        strokeWidth={10}
        styles={wheelStyles}
      >
        <LinearGradientSvg>
          <defs>
            <linearGradient
              id="loading-gradient"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6706CE" />
              <stop offset="1" stopColor="#DB76FF" />
            </linearGradient>
          </defs>
        </LinearGradientSvg>
        <LoadingIcon src={loadingIcon} />
        <PercentText>{percent}%</PercentText>
      </CircularProgressbarWithChildren>
      <LoadingText>Generating...</LoadingText>
    </LoadingWheelWrapper>
  );
};

export default LoadingWheel;
