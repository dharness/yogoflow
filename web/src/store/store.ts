import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pageReducer from "./pageSlice";
import generateVideoReducer from "./generateVideoSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    generateVideo: generateVideoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
