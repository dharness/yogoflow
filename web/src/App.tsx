import styled from "styled-components";
import Header from "./components/Header";
import Panel from "./components/Panel";

const AppLayout = styled.div`
  background: #261e2f;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

function App() {
  return (
    <>
      <AppLayout>
        <Header></Header>
        <Panel />
      </AppLayout>
    </>
  );
}

export default App;
