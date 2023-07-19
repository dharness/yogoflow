import { createAction, createSlice } from "@reduxjs/toolkit";

export const loadProjects = createAction("loadProjects");

enum LoadingState {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

interface WorkspaceState {
  loadingStatuses: { [key: string]: LoadingState };
  activeFrameId?: string;
  frameIdToClear: string;
}

const initialState = {
  loadingStatuses: {},
  activeFrameId: "default",
  frameIdToClear: "",
} as WorkspaceState;

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {},
});

export default workspaceSlice.reducer;
