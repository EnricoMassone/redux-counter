export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const createIncrementAction = () => ({
  type: INCREMENT
});

export const createDecrementAction = () => ({
  type: DECREMENT
});

export const createResetAction = () => ({
  type: RESET
});
