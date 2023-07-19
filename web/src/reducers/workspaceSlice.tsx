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
}

const initialState = {
  loadingStatuses: {},
} as WorkspaceState;

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {},
});

export default workspaceSlice.reducer;
