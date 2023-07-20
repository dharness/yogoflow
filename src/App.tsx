import PoseMeter from "./components/PoseMeter";
import ReferencePose from "./components/ReferencePose";
import VideoFeed from "./components/VideoFeed";

function App() {
  return (
    <>
      <div>
        <PoseMeter></PoseMeter>
        <ReferencePose></ReferencePose>
        <VideoFeed></VideoFeed>
      </div>
    </>
  );
}

export default App;
