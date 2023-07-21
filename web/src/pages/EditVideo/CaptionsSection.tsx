import { useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown";
import VideoPreview from "../../components/VideoPreview";
import { captionSectionComplete, selectVideoUrl } from "../../store/page";
import styled from "styled-components/macro";
import Button from "../../components/Button";
import { useAppDispatch } from "../../store/store";

const FONT_STYLE_OPTIONS = ["Roboto", "Arial"];

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

const Form = styled.form`
  flex: 1;
  background: red;
`;

const CaptionsSection = () => {
  const dispatch = useAppDispatch();
  const videoUrl = useSelector(selectVideoUrl);
  return (
    <Layout>
      <Content>
        <Form>
          <Dropdown options={FONT_STYLE_OPTIONS} />
        </Form>
        <VideoPreview videoUrl={videoUrl} />
      </Content>
      <Footer>
        <Button onClick={() => dispatch(captionSectionComplete())}>
          Continue
        </Button>
      </Footer>
    </Layout>
  );
};

export default CaptionsSection;
