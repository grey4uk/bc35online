import { createAction } from "@reduxjs/toolkit";
import { CHANGE_DECR, CHANGE_INCR } from "./stepConstants";

// export const changeStepIncr = (step) => ({
//   type: CHANGE_INCR,
//   payload: step,
// });
// export const changeStepDecr = (step) => ({
//   type: CHANGE_DECR,
//   payload: step,
// });
export const changeStepIncr = createAction(CHANGE_INCR, (e) => {
  return {
    payload: Number(e.target.value), // 100 || 50
  };
});
export const changeStepDecr = createAction(CHANGE_DECR, (e) => {
  return {
    payload: e,
  };
});
