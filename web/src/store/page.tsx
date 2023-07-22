import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum TabIdEnum {
  Captions = "Captions",
  Music = "Music",
  Download = "Download",
}

export enum PageIdEnum {
  UploadVideo = "UploadVideo",
  EditVideo = "EditVideo",
}

interface PageState {
  pageId: PageIdEnum;
  videoUrl: string;
  currentTabId: TabIdEnum;
}

const initialState = {
  pageId: PageIdEnum.UploadVideo,
  videoUrl: "",
  currentTabId: TabIdEnum.Captions,
} as PageState;

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    tabSelected: (state, action) => {
      state.currentTabId = action.payload.tabId;
    },
    sessionCancelled: (state) => {
      state.pageId = initialState.pageId;
      state.currentTabId = initialState.currentTabId;
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
});

export const {
  uploadComplete,
  sessionCancelled,
  captionSectionComplete,
  musicSectionComplete,
  tabSelected,
} = pageSlice.actions;
export default pageSlice.reducer;

export const selectPageId = (state: RootState) => state.page.pageId;
export const selectVideoUrl = (state: RootState) => state.page.videoUrl;
export const selectCurrentTabId = (state: RootState) => state.page.currentTabId;
