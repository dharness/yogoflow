import { useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown";
import VideoPreview from "../../components/VideoPreview";
import { captionSectionComplete, selectVideoUrl } from "../../store/page";
import styled from "styled-components/macro";
import Button from "../../components/Button";
import { useAppDispatch } from "../../store/store";
import FormItem from "../../components/FormItem";
import Form from "../../components/Form";

const FONT_STYLE_OPTIONS = ["Roboto", "Arial"];
const POSITION_OPTIONS = ["Top", "Bottom", "Left", "Right"];

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

const CaptionsSection = () => {
  const dispatch = useAppDispatch();
  const videoUrl = useSelector(selectVideoUrl);
  return (
    <Layout>
      <Content>
        <Form>
          <FormItem
            label="Position"
            el={<Dropdown options={POSITION_OPTIONS} />}
          />
          <FormItem
            label="Font-Style"
            el={<Dropdown options={FONT_STYLE_OPTIONS} />}
          />
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
