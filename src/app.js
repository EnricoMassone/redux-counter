import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="app">
          <Counter />
        </div>
      </Provider>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);
