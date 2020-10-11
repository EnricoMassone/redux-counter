import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";

const App = () => {
  return (
    <React.StrictMode>
      <div className="app">
        <Counter />
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);
