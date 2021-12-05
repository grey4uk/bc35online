// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { CHANGE_DECR, CHANGE_INCR } from "./stepConstants";
import { changeStepDecr, changeStepIncr } from "./stepActions";

// const stepReducerIncr = (state = 10, { type, payload }) => {
//   switch (type) {
//     case CHANGE_INCR:
//       return payload;
//     default:
//       return state;
//   }
// };
// const stepReducerDecr = (state = 10, { type, payload }) => {
//   switch (type) {
//     case CHANGE_DECR:
//       return payload;
//     default:
//       return state;
//   }
// };
const stepReducerIncr = createReducer(10, {
  [changeStepIncr]: (_, action) => {
    console.log("action :>> ", action);
    return action.payload;
  },
});
const stepReducerDecr = createReducer(10, {
  [changeStepDecr]: (_, { payload }) => Number(payload.target.value),
});

const stepReducer = combineReducers({
  incr: stepReducerIncr,
  decr: stepReducerDecr,
});

export default stepReducer;
