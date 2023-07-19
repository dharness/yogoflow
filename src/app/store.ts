import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import workspaceReducer from "../reducers/workspaceSlice";

export const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
