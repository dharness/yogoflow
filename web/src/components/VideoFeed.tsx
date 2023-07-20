import { RefObject, useEffect, useRef, useState } from "react";
import Webcam from "../utils/webcam";
import { useAppDispatch } from "../app/store";
import {
  selectSnapshotsEnabled,
  snapshotUpdated,
  snapshotsChanged,
} from "../reducers/videoFeedSlice";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SNAPSHOT_INTERVAL_MS = 300;

const StyledVideoFeed = styled.div`
  max-width: 350px;
  border-radius: 20px;
  video {
    width: 350px;
    height: 622px;
    object-fit: cover;
  }
  canvas {
    display: none;
  }
`;

const VideoFeed = () => {
  const dispatch = useAppDispatch();
  const snapshotsEnabled = useSelector(selectSnapshotsEnabled);
  const videoRef: RefObject<HTMLVideoElement> = useRef(null);
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
  const [webcam, setWebcam] = useState<Webcam>();

  const onSnapshotInterval = () => {
    if (!snapshotsEnabled) return;
    if (!webcam?.isConnected) return;
    const imgData = webcam?.getSnapshot();
    dispatch(snapshotUpdated(imgData));
  };

  const toggleSnapshots = () => {
    dispatch(snapshotsChanged(!snapshotsEnabled));
  };

  useEffect(() => {
    const snapshotIntervalID = setInterval(
      () => onSnapshotInterval(),
      SNAPSHOT_INTERVAL_MS
    );
    return () => clearInterval(snapshotIntervalID);
  }),
    [webcam, snapshotsEnabled];

  useEffect(() => {
    if (!videoRef?.current || !canvasRef?.current) {
      return console.error("No refs");
    }
    const nextWebcam = new Webcam(videoRef.current, canvasRef.current);
    setWebcam(nextWebcam);
  }, []);

  return (
    <StyledVideoFeed>
      <video ref={videoRef} autoPlay={true}></video>
      <canvas ref={canvasRef} width="400" height="350"></canvas>
      <button onClick={toggleSnapshots}>
        {snapshotsEnabled ? "Disable" : "Enable"}
      </button>
    </StyledVideoFeed>
  );
};

export default VideoFeed;
