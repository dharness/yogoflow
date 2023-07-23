import { useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown";
import VideoPreview from "../../components/VideoPreview";
import {
  CaptionPositionEnum,
  captionPositionChanged,
  captionSectionComplete,
  selectCaptionPosition,
  selectVideoUrl,
} from "../../store/pageSlice";
import styled from "styled-components/macro";
import Button from "../../components/Button";
import { useAppDispatch } from "../../store/store";
import FormItem from "../../components/FormItem";
import Form from "../../components/Form";

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
  const selectedPosition = useSelector(selectCaptionPosition);

  const onPositionSelected = (nextCaptionPosition: string) => {
    dispatch(captionPositionChanged(nextCaptionPosition));
  };

  return (
    <Layout>
      <Content>
        <Form>
          <FormItem
            label="Position"
            el={
              <Dropdown
                selected={selectedPosition}
                options={Object.values(CaptionPositionEnum)}
                onChange={onPositionSelected}
              />
            }
          />
        </Form>
        <VideoPreview videoUrl={videoUrl} overlayPosition={selectedPosition} />
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
