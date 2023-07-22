import styled from "styled-components/macro";
import uploadSymbolPath from "../assets/upload-symbol.svg";
import { FC, useCallback, useRef } from "react";
import Button from "./Button";
import { useDropzone } from "react-dropzone";

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
  color: #848385;
  font-size: 13px;
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
  position: relative;
`;

const DragDropOverlay = styled.div`
  position: absolute;
  bottom: 7%;
  width: 90%;
  height: 90%;
  border-radius: 20px;
  border: 3px dotted #ccbcdc;
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

  const getFileFromInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.files) return;
      const files = Array.from(e.currentTarget.files);
      onFileChanged(files[0]);
    },
    [onFileChanged]
  );

  const onDrop = useCallback(
    (files: File[]) => {
      if (!files.length) return;
      onFileChanged(files[0]);
    },
    [onFileChanged]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/mp4": [".mp4"],
    },
  });

  return (
    <Layout {...getRootProps()} onClick={null}>
      {isDragActive && <DragDropOverlay />}
      <UploadSymbol src={uploadSymbolPath} />
      <Texts>
        {primaryText && <PrimaryText>{primaryText}</PrimaryText>}
        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
      </Texts>
      <Button onClick={onBrowseClick}>Browse Files</Button>
      <input
        {...getInputProps()}
        accept="video/mp4"
        type="file"
        onChange={getFileFromInput}
        ref={inputRef}
        style={{ display: "none" }}
      />
    </Layout>
  );
};

export default FileUpload;
