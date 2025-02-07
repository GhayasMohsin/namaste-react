const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React from javascipt"
);
const child = React.createElement("div", { id: "child" }, heading);
const parent = React.createElement("div", { id: "parent" }, child);
root.render(parent);
console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React from javascipt"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
