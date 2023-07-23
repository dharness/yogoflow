import { uploadComplete } from "../../store/pageSlice";
import styled from "styled-components/macro";
import { useAppDispatch } from "../../store/store";
import FileUpload from "../../components/FileUpload";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 20px;
`;

const UploadSection = () => {
  const dispatch = useAppDispatch();
  const onFileChanged = (file: File) => {
    const videoUrl = URL.createObjectURL(file);
    dispatch(uploadComplete({ videoUrl }));
  };

  return (
    <Layout>
      <FileUpload
        primaryText="Drag & drop a video file to upload"
        secondaryText="Your video will not be stored after processing."
        onFileChanged={onFileChanged}
      />
    </Layout>
  );
};

export default UploadSection;
