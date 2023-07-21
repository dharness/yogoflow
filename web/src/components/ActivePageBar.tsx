import styled from "styled-components";

const StyledActivePageBar = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
`;

const BackgroundBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e9e4ef;
  position: absolute;
`;

const ForegroundBar = styled.div<{ $percentFilled: number }>`
  width: ${(props) => props.$percentFilled}%;
  height: 100%;
  background-color: #6706ce;
  position: absolute;
`;

const ActivePageBar = () => {
  return (
    <StyledActivePageBar>
      <BackgroundBar></BackgroundBar>
      <ForegroundBar $percentFilled={0}></ForegroundBar>
    </StyledActivePageBar>
  );
};

export default ActivePageBar;
