import { useEffect } from "react";
import { loadPoseSequence } from "../reducers/yogaRoutineSlice";
import { useAppDispatch } from "../app/store";

const ReferencePose = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPoseSequence());
  }, []);
  return <div>I am the reference pose</div>;
};

export default ReferencePose;
