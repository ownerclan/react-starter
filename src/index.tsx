import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

import "./index.scss";

ReactDOM.render(
  <App world="world!" />,
  document.getElementById("root") as HTMLElement,
);
