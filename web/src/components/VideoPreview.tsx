import { FC } from "react";
import styled from "styled-components";
import { CaptionPositionEnum } from "../store/pageSlice";
import textOverlayExample from "../assets/text-overlay-example.svg";

const VideoWrapper = styled.div`
  max-width: 350px;
  max-height: 260px;

  position: relative;
  border-radius: 12px;
  overflow: clip;
`;

const StyledVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  ::-webkit-media-controls-panel {
    background-image: none !important;
    filter: brightness(0.4);
  }
`;

const TextOverlay = styled.img<{ $position: CaptionPositionEnum }>`
  height: 34px;
  position: absolute;
  top: 10px;
  right: ${({ $position }) =>
    $position === CaptionPositionEnum.Right ? "10px" : "auto"};
  left: ${({ $position }) =>
    $position === CaptionPositionEnum.Left ? "10px" : "auto"};
`;

interface VideoPreviewProps {
  videoUrl: string;
  overlayPosition?: CaptionPositionEnum;
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoUrl, overlayPosition }) => {
  return (
    <VideoWrapper>
      {overlayPosition && (
        <TextOverlay $position={overlayPosition} src={textOverlayExample} />
      )}
      <StyledVideo controls key={videoUrl} preload="auto">
        <source src={videoUrl} type="video/mp4" />
      </StyledVideo>
    </VideoWrapper>
  );
};

export default VideoPreview;
