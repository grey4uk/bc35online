import { createReducer } from "@reduxjs/toolkit";
import {
  addTodoError,
  addTodoRequest,
  getTodosError,
  getTodosRequest,
  removeTodoError,
  removeTodoRequest,
} from "../todos/todosActions";

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReduccer = createReducer(null, {
  [addTodoError]: setError,
  [addTodoRequest]: resetError,
  [getTodosError]: setError,
  [getTodosRequest]: resetError,
  [removeTodoError]: setError,
  [removeTodoRequest]: resetError,
});

export default errorReduccer;
