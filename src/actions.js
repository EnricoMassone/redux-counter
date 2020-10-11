export const increment = "INCREMENT";
export const decrement = "DECREMENT";
export const reset = "RESET";

export const getIncrementAction = () => ({
  type: increment
});

export const getDecrementAction = () => ({
  type: decrement
});

export const getResetAction = () => ({
  type: reset
});
