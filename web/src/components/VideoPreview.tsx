import { FC } from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  max-width: 350px;
  max-height: 320px;
  position: relative;
  border-radius: 12px;
  overflow: clip;
`;

const StyledVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
`;

const TextOverlay = styled.div`
  height: 30px;
  width: 110px;
  position: absolute;
  background-color: #e9e4ef;
  top: 10px;
  border-radius: 0 20px 20px 0;
`;

interface VideoPreviewProps {
  videoUrl: string;
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoUrl }) => {
  return (
    <VideoWrapper>
      <TextOverlay />
      <StyledVideo controls>
        <source src={videoUrl} type="video/mp4" />
      </StyledVideo>
    </VideoWrapper>
  );
};

export default VideoPreview;
