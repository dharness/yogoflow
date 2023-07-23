import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  selectCaptionPosition,
  selectVideoUrl,
  sessionCancelled,
} from "./pageSlice";
import { blobUrlToFile } from "../utils/fileConversion";
import { generateVideo } from "../utils/poseApi";

export const generateTriggered = createAsyncThunk(
  "generate-triggered",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    const videoUrl = selectVideoUrl(state);
    const captionPosition = selectCaptionPosition(state);
    const videoFile = await blobUrlToFile(videoUrl);
    const data = await generateVideo(videoFile, captionPosition);
    const blob = new Blob([data], { type: "video/mp4" });
    const url = URL.createObjectURL(blob);

    return { url };
  }
);

export enum RequestStatusEnum {
  Pending = "Pending",
  Success = "Success",
  Failure = "Failure",
  None = "None",
}

interface GenerateVideoState {
  url: string;
  status: RequestStatusEnum;
}

const initialState: GenerateVideoState = {
  url: "",
  status: RequestStatusEnum.None,
};

const generateVideoSlice = createSlice({
  name: "generate-video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sessionCancelled.fulfilled, (state, action) => {
        state.url = "";
      })
      .addCase(generateTriggered.pending, (state, action) => {
        state.status = RequestStatusEnum.Pending;
      })
      .addCase(generateTriggered.fulfilled, (state, action) => {
        state.url = action.payload.url;
        state.status = RequestStatusEnum.Success;
      })
      .addCase(generateTriggered.rejected, (state, action) => {
        state.status = RequestStatusEnum.Failure;
      });
  },
});

export default generateVideoSlice.reducer;

export const selectGeneratedVideoUrl = (state: RootState) =>
  state.generateVideo.url;
