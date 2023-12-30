const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namastey Akshay!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am child  h1 tag"),
    React.createElement("h2", {}, "I am child tag h2 tag")
  ),
  React.createElement(
    "div",
    { id: "child 2" },
    React.createElement("h1", {}, "I am child  h1 tag"),
    React.createElement("h2", {}, "I am child tag h2 tag")
  ),
]);

root.render(parent);
