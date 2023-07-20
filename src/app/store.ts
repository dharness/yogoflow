import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import workspaceReducer from "../reducers/workspaceSlice";
import videoFeedReducer from "../reducers/videoFeedSlice";
import yogaRoutineReducer from "../reducers/yogaRoutineSlice";

export const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
    videoFeed: videoFeedReducer,
    yogaRoutine: yogaRoutineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
