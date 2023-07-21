import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// export const loadPoseSequence = createAsyncThunk(
//   "yoga-routine/load-pose-sequence",
//   async (_payload, {}: any) => {
//     const poseSequence = await routineApi.getPoseSequence(10);
//     return poseSequence;
//   }
// );

export enum PAGE_ID {
  UPLOAD_VIDEO,
  EDIT_VIDEO,
}

interface PageState {
  pageId: PAGE_ID;
}

const initialState = {
  pageId: PAGE_ID.UPLOAD_VIDEO,
} as PageState;

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    sessionCancelled: (state) => {
      state.pageId = PAGE_ID.UPLOAD_VIDEO;
    },
    uploadComplete: (state) => {
      state.pageId = PAGE_ID.EDIT_VIDEO;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(loadPoseSequence.fulfilled, (state, action) => {
  //     state.poseSequence = action.payload;
  //   });
  // },
});

export const { uploadComplete, sessionCancelled } = pageSlice.actions;
export default pageSlice.reducer;

export const selectPageId = (state: RootState) => state.page.pageId;
