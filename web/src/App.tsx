import styled from "styled-components/macro";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { palette } from "./utils/styleHelpers";

const AppLayout = styled.div`
  background: ${palette.purples.shade90};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

function App() {
  return (
    <AppLayout>
      <Header></Header>
      <MainPage />
    </AppLayout>
  );
}

export default App;
