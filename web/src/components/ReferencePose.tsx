import { useEffect } from "react";
import { loadPoseSequence } from "../reducers/yogaRoutineSlice";
import { useAppDispatch } from "../app/store";
import sidebend from "./../../public/sidebend.png";
import styled from "styled-components";

const ReferencePoseImg = styled.img`
  max-width: 350px;
  border-radius: 20px;
`;

const ReferencePose = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPoseSequence());
  }, []);
  return (
    <div>
      <ReferencePoseImg src={sidebend} alt="sidebend" />
    </div>
  );
};

export default ReferencePose;
