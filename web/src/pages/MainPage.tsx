import { useSelector } from "react-redux";
import { PageIdEnum, selectPageId } from "../store/page";
import UploadPage from "./UploadPage";
import EditVideoPage from "./EditVideo/EditVideoPage";
import ErrorPage from "./ErrorPage";

const renderPage = (pageId: PageIdEnum) => {
  switch (pageId) {
    case PageIdEnum.UploadVideo:
      return <UploadPage />;

    case PageIdEnum.EditVideo:
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
