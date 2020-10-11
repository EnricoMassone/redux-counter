import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";

const App = () => {
  return (
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);
