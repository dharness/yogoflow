import styled from "styled-components";
import PanelTitleBar from "./PanelTitleBar";
import ActivePageBar from "./ActivePageBar";
import NavButtons from "./NavButtons";
import UploadVideo from "./pages/UploadVideo";

const PanelContent = styled.div`
  height: 100%;
  padding: 25px;
  align-items: end;
`;

const StyledPanel = styled.div`
  background: white;
  width: 680px;
  height: 550px;
  display: flex;
  flex-direction: column;
  margin: 0px auto 0px auto;
  border-radius: 20px;
  overflow: hidden;
`;

const Panel = () => {
  return (
    <>
      <StyledPanel>
        <PanelTitleBar></PanelTitleBar>
        <ActivePageBar></ActivePageBar>
        <PanelContent>
          <UploadVideo />
          {/* <NavButtons></NavButtons> */}
        </PanelContent>
      </StyledPanel>
    </>
  );
};

export default Panel;
