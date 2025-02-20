import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React from javascipt ❤️"
);

// JSX element
const jsxHeading = <h1 id="heading">Namaste React using JSX (●'◡'●)</h1>;

// Functional component
const HeadingComponent = () => (
  <div>
    {jsxHeading}
    <h1>React element using functional component😒</h1>
  </div>
);

// root.render(HeadingComponent());
root.render(<HeadingComponent />);
