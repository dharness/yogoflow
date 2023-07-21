import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pageReducer from "./page";

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
