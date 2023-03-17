import { GeistProvider } from "@geist-ui/core";
import disableDevtool from "disable-devtool";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GeistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GeistProvider>
    </Provider>
  </React.StrictMode>
);
