import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./themes/ThemeConfig.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider theme={ThemeConfig}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
