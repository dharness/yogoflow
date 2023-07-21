import { FC } from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  width: 350px;
  border-radius: 12px;
`;

interface VideoPreviewProps {
  videoUrl: string;
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoUrl }) => {
  return (
    <StyledVideo controls>
      <source src={videoUrl} type="video/mp4" />
    </StyledVideo>
  );
};

export default VideoPreview;
