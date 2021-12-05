import { createReducer } from "@reduxjs/toolkit";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "./counterActions";

// import { RESET, INCREMENT, DECREMENT } from "./counterConstants";

// const counterReducer = (state = 120, action) => {
//   // s = 120, action = {type: "counter/reset"}
//   switch (action.type) {
//     case RESET:
//       return 0;
//     case INCREMENT:
//       return state + action.payload;
//     case DECREMENT:
//       return state - action.payload;
//     default:
//       return state;
//   }
// };
const counterReducer = createReducer(120, {
  [counterDecrement]: (state, action) => state - action.payload,
  [counterIncrement]: (state, { payload }) => state + payload,
  [counterReset]: () => 0,
});

export default counterReducer;
