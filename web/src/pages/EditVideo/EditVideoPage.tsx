import { useSelector } from "react-redux";
import Panel from "../../components/Panel";
import {
  TabIdEnum,
  selectCurrentTabId,
  sessionCancelled,
  tabSelected,
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
    id: TabIdEnum.Captions,
    symbol: "1",
  },
  {
    title: "Add Music",
    section: <MusicSection />,
    id: TabIdEnum.Music,
    symbol: "2",
  },
  {
    title: "Download",
    section: <DownloadSection />,
    id: TabIdEnum.Download,
    symbol: "3",
  },
];

// --- Styles ---

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 35px 35px 35px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// --- Component ---

const EditVideoPage = () => {
  const dispatch = useAppDispatch();
  const sectionId = useSelector(selectCurrentTabId);
  const activeConfig = tabConfigs.find(({ id }) => id === sectionId);

  const onTabClicked = (tabId: TabIdEnum) => {
    dispatch(tabSelected({ tabId }));
  };

  return (
    <Panel
      titleText="Style your video"
      onCloseClick={() => dispatch(sessionCancelled())}
    >
      <PageLayout>
        <TabBar>
          {tabConfigs.map((tabConfig) => (
            <TabBarItem
              key={tabConfig.id}
              title={tabConfig.title}
              symbol={tabConfig.symbol}
              onClick={() => onTabClicked(tabConfig.id)}
              isActive={sectionId === tabConfig.id}
            />
          ))}
        </TabBar>

        <Content>{activeConfig?.section}</Content>
      </PageLayout>
    </Panel>
  );
};

export default EditVideoPage;