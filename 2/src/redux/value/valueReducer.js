import {
  createReducer,
  createAction,
} from '@reduxjs/toolkit';

export const addOne = createAction('value/add');

const value = createReducer(0, {
  [addOne]: (state) => state + 1,
});

export default value;
