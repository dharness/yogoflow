import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import routineApi from "../utils/routineApi";

export const loadPoseSequence = createAsyncThunk(
  "yoga-routine/load-pose-sequence",
  async (_payload, {}: any) => {
    const poseSequence = await routineApi.getPoseSequence(10);
    return poseSequence;
  }
);

interface YogaRoutineState {
  poseSequence: string[];
}

const initialState = {
  poseSequence: [],
} as YogaRoutineState;

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPoseSequence.fulfilled, (state, action) => {
      state.poseSequence = action.payload;
    });
  },
});

export default workspaceSlice.reducer;
