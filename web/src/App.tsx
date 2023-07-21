import styled from "styled-components/macro";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

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
        <MainPage />
      </AppLayout>
    </>
  );
}

export default App;
