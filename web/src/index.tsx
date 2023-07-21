import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Normalize } from "styled-normalize";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <App />
    </Provider>
  </React.StrictMode>
);
