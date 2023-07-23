import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { selectGeneratedVideoUrl } from "./generateVideoSlice";

export enum CaptionPositionEnum {
  Right = "right",
  Left = "left",
}

export enum TabIdEnum {
  Upload = "Upload",
  Captions = "Captions",
  Music = "Music",
  Download = "Download",
}

export enum PageIdEnum {
  UploadVideo = "UploadVideo",
  EditVideo = "EditVideo",
}

export const sessionCancelled = createAsyncThunk(
  "session-cencelled",
  (arg, { getState }) => {
    const state = getState() as RootState;
    const videoUrl = selectVideoUrl(state);
    const generatedVideoUrl = selectGeneratedVideoUrl(state);

    URL.revokeObjectURL(videoUrl);
    URL.revokeObjectURL(generatedVideoUrl);
  }
);

interface PageState {
  pageId: PageIdEnum;
  videoUrl: string;
  currentTabId: TabIdEnum;
  captionPosition: CaptionPositionEnum;
}

const initialState: PageState = {
  pageId: PageIdEnum.UploadVideo,
  videoUrl: "",
  currentTabId: TabIdEnum.Upload,
  captionPosition: CaptionPositionEnum.Left,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    tabSelected: (state, action) => {
      state.currentTabId = action.payload.tabId;
    },
    captionPositionChanged: (state, action) => {
      state.captionPosition = action.payload;
    },
    captionSectionComplete: (state) => {
      state.currentTabId = TabIdEnum.Music;
    },
    musicSectionComplete: (state) => {
      state.currentTabId = TabIdEnum.Download;
    },
    uploadComplete: (state, action) => {
      const { videoUrl } = action.payload;
      state.pageId = PageIdEnum.EditVideo;
      state.videoUrl = videoUrl;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sessionCancelled.fulfilled, (state, action) => {
      state.pageId = initialState.pageId;
      state.currentTabId = initialState.currentTabId;
      state.videoUrl = "";
    });
  },
});

export const {
  uploadComplete,
  captionPositionChanged,
  captionSectionComplete,
  musicSectionComplete,
  tabSelected,
} = pageSlice.actions;
export default pageSlice.reducer;

export const selectPageId = (state: RootState) => state.page.pageId;
export const selectVideoUrl = (state: RootState) => state.page.videoUrl;
export const selectCaptionPosition = (state: RootState) =>
  state.page.captionPosition;
export const selectCurrentTabId = (state: RootState) => state.page.currentTabId;
