import styled from "styled-components";
import uploadSymbolPath from "../../assets/upload-symbol.svg";
import { useRef } from "react";

const BrowseButton = styled.button`
  background-color: #6706ce;
  outline: none;
  border: none;
  font-size: 26px;
  font-family: "Dongle", sans-serif;
  font-weight: 500;
  color: white;
  padding: 8px 20px 8px 20px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 30px;
  transition: 0.07s ease-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const Prompts = styled.div`
  font-family: "Inter", sans-serif;
  text-align: center;
  margin-top: 30px;
`;

const Prompt = styled.div`
  font-weight: bold;
  font-size: 19px;
`;

const SubPrompt = styled.div`
  color: #c6c5c8;
  font-size: 12px;
  margin-top: 10px;
`;

const UploadSymbol = styled.img`
  width: 150px;
  margin-top: 80px;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadVideo = () => {
  const inputFile = useRef<HTMLInputElement>(null);

  const onBrowseClick = () => {
    inputFile.current?.click();
  };

  return (
    <Layout>
      <UploadSymbol src={uploadSymbolPath} />
      <Prompts>
        <Prompt>Drag & drop a video file to upload</Prompt>
        <SubPrompt>Your video will not be stored after processing.</SubPrompt>
      </Prompts>
      <BrowseButton onClick={onBrowseClick}>Browse Files</BrowseButton>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
    </Layout>
  );
};

export default UploadVideo;
