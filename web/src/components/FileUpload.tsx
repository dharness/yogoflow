import styled from "styled-components/macro";
import uploadSymbolPath from "../assets/upload-symbol.svg";
import { FC, useRef } from "react";
import Button from "./Button";

const Texts = styled.div`
  font-family: "Inter", sans-serif;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const PrimaryText = styled.div`
  font-weight: bold;
  font-size: 19px;
`;

const SecondaryText = styled.div`
  color: #c6c5c8;
  font-size: 12px;
  margin-top: 10px;
`;

const UploadSymbol = styled.img`
  width: 150px;
  min-width: 150px;
  margin-top: 80px;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface FileUploadProps {
  onFileChanged: (file: File) => void;
  primaryText: string;
  secondaryText: string;
}

const FileUpload: FC<FileUploadProps> = ({
  onFileChanged,
  primaryText,
  secondaryText,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onBrowseClick = () => {
    inputRef.current?.click();
  };

  const getFileFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    const files = Array.from(e.currentTarget.files);
    onFileChanged(files[0]);
  };

  return (
    <Layout>
      <UploadSymbol src={uploadSymbolPath} />
      <Texts>
        {primaryText && <PrimaryText>{primaryText}</PrimaryText>}
        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
      </Texts>
      <Button onClick={onBrowseClick}>Browse Files</Button>
      <input
        type="file"
        onChange={getFileFromInput}
        ref={inputRef}
        style={{ display: "none" }}
      />
    </Layout>
  );
};

export default FileUpload;
