import { useSelector } from "react-redux";
import VideoPreview from "../../components/VideoPreview";
import { sessionCancelled } from "../../store/pageSlice";
import generatePromptHero from "./../../assets/generate-prompt-hero.png";
import styled from "styled-components/macro";
import Button, { ButtonVariantsEnum } from "../../components/Button";
import { useAppDispatch } from "../../store/store";
import { useRef } from "react";
import {
  generateTriggered,
  selectGeneratedVideoUrl,
} from "../../store/generateVideoSlice";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 30px;
`;

const Footer = styled.div`
  display: flex;
  margin-top: auto;
  gap: 20px;
  justify-content: flex-end;
  width: 100%;
`;

const PromptImg = styled.img`
  margin-top: 15px;
  width: 160px;
  min-width: 160px;
`;

const PromptTextPrimary = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-top: 23px;
`;

const PromptTextSecondary = styled.div`
  font-family: "Inter", sans-serif;
  color: #848385;
  font-size: 13px;
  margin-top: 9px;
`;

const GenerateSection = () => {
  const dispatch = useAppDispatch();
  const downloadLink = useRef<HTMLAnchorElement>(null);
  const videoUrl = useSelector(selectGeneratedVideoUrl);
  const loadingPercent = 0.1;

  const renderDownloadButtons = () => (
    <>
      <Button
        onClick={() => dispatch(sessionCancelled())}
        variant={ButtonVariantsEnum.Secondary}
      >
        Start Over
      </Button>
      <Button onClick={() => downloadLink.current?.click()}>Download</Button>
      <a
        href={videoUrl}
        ref={downloadLink}
        style={{ display: "none" }}
        download={true}
      />
    </>
  );

  const renderGenerateButtons = () => (
    <Button onClick={() => dispatch(generateTriggered())}>Generate</Button>
  );

  const renderGeneratePrompt = () => {
    return (
      <>
        <PromptImg src={generatePromptHero} />
        <PromptTextPrimary>
          You’re ready to put it all together!
        </PromptTextPrimary>
        <PromptTextSecondary>
          Click generate to create your video
        </PromptTextSecondary>
      </>
    );
  };

  return (
    <Layout>
      {videoUrl ? <VideoPreview videoUrl={videoUrl} /> : renderGeneratePrompt()}
      <Footer>
        {videoUrl ? renderDownloadButtons() : renderGenerateButtons()}
      </Footer>
    </Layout>
  );
};

export default GenerateSection;
