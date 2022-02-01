import React from "react";
import ReactDOM from "react-dom";
import ThemeConfig from "./theme";
import App from "./App";

ReactDOM.render(
  <ThemeConfig>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeConfig>,
  document.getElementById("root")
);
