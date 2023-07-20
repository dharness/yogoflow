import { useSelector } from "react-redux";
import { selectLatestPose } from "../reducers/videoFeedSlice";

const PoseMeter = () => {
  const latestPose = useSelector(selectLatestPose);
  return <div>CURRENT POSE: {latestPose}</div>;
};

export default PoseMeter;
