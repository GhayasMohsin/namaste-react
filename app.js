import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React from javascipt ❤️"
);
const jsxHeading = <h1 id="heading">Namaste React using JSX (●'◡'●)</h1>

root.render(jsxHeading);
