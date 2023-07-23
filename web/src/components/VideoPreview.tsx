import { FC } from "react";
import styled from "styled-components";
import { CaptionPositionEnum } from "../store/pageSlice";

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

const TextOverlay = styled.div<{ $position: CaptionPositionEnum }>`
  height: 30px;
  width: 110px;
  position: absolute;
  background-color: #e9e4ef;
  top: 10px;
  right: ${({ $position }) =>
    $position === CaptionPositionEnum.Right ? "0px" : "auto"};
  border-radius: 0 20px 20px 0;
`;

interface VideoPreviewProps {
  videoUrl: string;
  overlayPosition?: CaptionPositionEnum;
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoUrl, overlayPosition }) => {
  return (
    <VideoWrapper>
      {overlayPosition && <TextOverlay $position={overlayPosition} />}
      <StyledVideo controls key={videoUrl}>
        <source src={videoUrl} type="video/mp4" />
      </StyledVideo>
    </VideoWrapper>
  );
};

export default VideoPreview;
