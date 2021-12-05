import { createAction } from "@reduxjs/toolkit";

import { RESET, INCREMENT, DECREMENT } from "./counterConstants";

// export const counterReset = () => ({
//   type: RESET,
// });
// export const counterIncrement = (step) => ({
//   type: INCREMENT,
//   payload: step,
// });
// export const counterDecrement = (step) => ({
//   type: DECREMENT,
//   payload: step,
// });
export const counterReset = createAction("counter/reset"); // counterReset(abc) -> {type: RESET, payload: abc} 
export const counterIncrement = createAction(INCREMENT);
export const counterDecrement = createAction(DECREMENT);
