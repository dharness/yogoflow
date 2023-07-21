import { useSelector } from "react-redux";
import Panel from "../../components/Panel";
import {
  EditSectionIdEnum,
  selectEditSectionId,
  sessionCancelled,
} from "../../store/page";
import { useAppDispatch } from "../../store/store";
import styled from "styled-components/macro";
import CaptionsSection from "./CaptionsSection";
import MusicSection from "./MusicSection";
import DownloadSection from "./DownloadSection";
import TabBar from "../../components/TabBar";
import TabBarItem from "../../components/TabBarItem";

// --- Constants ---

const tabConfigs = [
  {
    title: "Add Captions",
    section: <CaptionsSection />,
    id: EditSectionIdEnum.Captions,
    symbol: "1",
  },
  {
    title: "Add Music",
    section: <MusicSection />,
    id: EditSectionIdEnum.Music,
    symbol: "2",
  },
  {
    title: "Download",
    section: <DownloadSection />,
    id: EditSectionIdEnum.Download,
    symbol: "3",
  },
];

// --- Styles ---

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 35px 35px 35px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
`;

// --- Helpers ---

const renderSection = (sectionId: EditSectionIdEnum) => {
  switch (sectionId) {
    case EditSectionIdEnum.Captions:
      return <CaptionsSection />;
    case EditSectionIdEnum.Music:
      return <MusicSection />;
    case EditSectionIdEnum.Download:
      return <DownloadSection />;
  }
};

// --- Component ---

const EditVideoPage = () => {
  const dispatch = useAppDispatch();
  const sectionId = useSelector(selectEditSectionId);

  return (
    <Panel
      titleText="Style your video"
      onCloseClick={() => dispatch(sessionCancelled())}
    >
      <TabBar activeTabIndex={0}>
        {tabConfigs.map((tabConfig) => (
          <TabBarItem
            key={tabConfig.id}
            title={tabConfig.title}
            symbol={tabConfig.symbol}
            isActive={sectionId === tabConfig.id}
          />
        ))}
      </TabBar>

      <Layout>{renderSection(sectionId)}</Layout>
    </Panel>
  );
};

export default EditVideoPage;
