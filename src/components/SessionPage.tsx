import styled from "styled-components";
import PoseMeter from "./PoseMeter";
import ReferencePose from "./ReferencePose";
import VideoFeed from "./VideoFeed";

const SessionPageLayout = styled.div`
  background: orange;
  grid-row: 2/3;
  grid-column: 1/3;
  display: flex;
  flex-direction: row;
`;

const SessionPage = () => {
  return (
    <SessionPageLayout>
      <ReferencePose></ReferencePose>
      <PoseMeter></PoseMeter>
      <VideoFeed></VideoFeed>
    </SessionPageLayout>
  );
};

export default SessionPage;
