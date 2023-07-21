import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum EditSectionIdEnum {
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
  editSection: EditSectionIdEnum;
}

const initialState = {
  pageId: PageIdEnum.UploadVideo,
  videoUrl: "",
  editSection: EditSectionIdEnum.Captions,
} as PageState;

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    sessionCancelled: (state) => {
      state.pageId = initialState.pageId;
      state.editSection = initialState.editSection;
    },
    captionSectionComplete: (state) => {
      state.editSection = EditSectionIdEnum.Music;
    },
    musicSectionComplete: (state) => {
      state.editSection = EditSectionIdEnum.Download;
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
} = pageSlice.actions;
export default pageSlice.reducer;

export const selectPageId = (state: RootState) => state.page.pageId;
export const selectVideoUrl = (state: RootState) => state.page.videoUrl;
export const selectEditSectionId = (state: RootState) => state.page.editSection;
