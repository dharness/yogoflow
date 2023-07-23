import Panel from "../components/Panel";
import FileUpload from "../components/FileUpload";
import { useAppDispatch } from "../store/store";
import { sessionCancelled, uploadComplete } from "../store/pageSlice";

const UploadPage = () => {
  const dispatch = useAppDispatch();
  const onFileChanged = (file: File) => {
    const videoUrl = URL.createObjectURL(file);
    dispatch(uploadComplete({ videoUrl }));
  };

  return (
    <Panel
      titleText="Upload a video"
      onCloseClick={() => dispatch(sessionCancelled())}
    >
      <FileUpload
        primaryText="Drag & drop a video file to upload"
        secondaryText="Your video will not be stored after processing."
        onFileChanged={onFileChanged}
      />
    </Panel>
  );
};

export default UploadPage;
