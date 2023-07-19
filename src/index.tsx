import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Normalize } from "styled-normalize";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
