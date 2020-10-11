import React from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createResetAction
} from "./actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Counter = ({ count, increment, decrement, reset }) => (
  <main className="counter">
    <p className="count">{count}</p>
    <section className="controls">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  </main>
);

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func
};

const mapStateToProps = ({ count }) => ({
  count
});

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(createIncrementAction());
  },

  decrement() {
    dispatch(createDecrementAction());
  },

  reset() {
    dispatch(createResetAction());
  }
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
