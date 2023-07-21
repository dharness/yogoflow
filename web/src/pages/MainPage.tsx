import { useSelector } from "react-redux";
import { PAGE_ID, selectPageId } from "../store/page";
import UploadPage from "./UploadPage";
import EditVideoPage from "./EditVideo/EditVideoPage";
import ErrorPage from "./ErrorPage";

const renderPage = (pageId: PAGE_ID) => {
  switch (pageId) {
    case PAGE_ID.UPLOAD_VIDEO:
      return <UploadPage />;

    case PAGE_ID.EDIT_VIDEO:
      return <EditVideoPage />;

    default:
      return <ErrorPage />;
  }
};

const MainPage = () => {
  const pageId = useSelector(selectPageId);
  return <>{renderPage(pageId)}</>;
};

export default MainPage;
