import { useSelector } from "react-redux";
import VideoPreview from "../../components/VideoPreview";
import { selectVideoUrl } from "../../store/page";
import styled from "styled-components/macro";
import Button from "../../components/Button";
import { useAppDispatch } from "../../store/store";
import { useRef } from "react";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 30px;
`;

const DownloadSection = () => {
  const dispatch = useAppDispatch();
  const downloadLink = useRef<HTMLAnchorElement>(null);
  const videoUrl = useSelector(selectVideoUrl);
  return (
    <Layout>
      <VideoPreview videoUrl={videoUrl} />
      <Button onClick={() => downloadLink.current?.click()}>Download</Button>
      <a
        href={videoUrl}
        ref={downloadLink}
        style={{ display: "none" }}
        download={true}
      />
    </Layout>
  );
};

export default DownloadSection;
