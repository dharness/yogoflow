import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import poseApi from "../utils/poseApi";
import _ from "lodash";
import { RootState } from "../app/store";
import { stat } from "fs";

const POSE_CONFIDENCE_THRESHOLD = 0.9;

export const snapshotUpdated = createAsyncThunk(
  "video-feed/snapshot-changed",
  async (imgData: string, {}) => {
    const response = await poseApi.matchPose(imgData);
    return response;
  }
);

interface VideoFeedState {
  latestPose: string;
  latestConfidence: number;
  snapshotsEnabled: boolean;
}

const initialState = {
  latestPose: "",
  latestConfidence: 0,
  snapshotsEnabled: false,
} as VideoFeedState;

const videoFeedSlice = createSlice({
  name: "video-feed",
  initialState,
  reducers: {
    snapshotsChanged(state, action) {
      state.snapshotsEnabled = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(snapshotUpdated.fulfilled, (state, action) => {
        const { pose, confidence } = action.payload;
        if (confidence < POSE_CONFIDENCE_THRESHOLD) return;

        state.latestPose = pose;
        state.latestConfidence = confidence;
      })
      .addCase(snapshotUpdated.rejected, (state, action) => {
        console.error("Snapshot change failed");
      });
  },
});

export const { snapshotsChanged } = videoFeedSlice.actions;
export default videoFeedSlice.reducer;

export const selectLatestPose = (state: RootState) =>
  state.videoFeed.latestPose;
export const selectSnapshotsEnabled = (state: RootState) =>
  state.videoFeed.snapshotsEnabled;
