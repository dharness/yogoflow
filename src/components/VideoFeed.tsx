import { RefObject, useEffect, useRef, useState } from "react";
import Webcam from "../utils/webcam";
import { useAppDispatch } from "../app/store";
import { snapshotUpdated } from "../reducers/videoFeedSlice";

const SNAPSHOT_INTERVAL_MS = 1000;

const VideoFeed = () => {
  const dispatch = useAppDispatch();
  const videoRef: RefObject<HTMLVideoElement> = useRef(null);
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
  const [webcam, setWebcam] = useState<Webcam>();

  const onSnapshotInterval = () => {
    if (!webcam?.isConnected) return false;
    // webcam?.getSnapshot();
  };

  const testSnapshot = () => {
    if (!webcam?.isConnected) return false;
    const imgData = webcam?.getSnapshot();
    dispatch(snapshotUpdated(imgData));
  };

  useEffect(() => {
    if (!videoRef?.current || !canvasRef?.current) return;
    const nextWebcam = new Webcam(videoRef.current, canvasRef.current);
    setWebcam(nextWebcam);

    const snapshotIntervalID = setInterval(
      onSnapshotInterval,
      SNAPSHOT_INTERVAL_MS
    );

    return () => clearInterval(snapshotIntervalID);
  }, []);

  return (
    <div>
      <button onClick={testSnapshot}>Snapshot</button>
      <video ref={videoRef} autoPlay={true}></video>
      <canvas ref={canvasRef} width="400" height="350"></canvas>
    </div>
  );
};

export default VideoFeed;
