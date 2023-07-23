import { useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown";
import VideoPreview from "../../components/VideoPreview";
import { musicSectionComplete, selectVideoUrl } from "../../store/pageSlice";
import styled from "styled-components/macro";
import Button from "../../components/Button";
import { useAppDispatch } from "../../store/store";
import FormItem from "../../components/FormItem";
import Form from "../../components/Form";

const MUSIC_OPTIONS = ["Never Gonna Give You Up", "Techno Jam"];

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const MusicSection = () => {
  const dispatch = useAppDispatch();
  const videoUrl = useSelector(selectVideoUrl);
  return (
    <Layout>
      <Content>
        <Form>
          <FormItem
            label="Background Track:"
            el={<Dropdown options={MUSIC_OPTIONS} />}
          />
        </Form>
        <VideoPreview videoUrl={videoUrl} />
      </Content>
      <Footer>
        <Button onClick={() => dispatch(musicSectionComplete())}>
          Continue
        </Button>
      </Footer>
    </Layout>
  );
};

export default MusicSection;
