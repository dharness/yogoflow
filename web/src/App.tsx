import styled from "styled-components";
import Header from "./components/Header";
import SessionPage from "./components/SessionPage";

const AppLayout = styled.div`
  background: plum;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 250px 1fr;
  overflow: clip;
`;

function App() {
  return (
    <>
      <AppLayout>
        <Header></Header>
        <SessionPage />
      </AppLayout>
    </>
  );
}

export default App;
