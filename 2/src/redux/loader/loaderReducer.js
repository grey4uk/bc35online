import { createReducer } from "@reduxjs/toolkit";
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  getTodosRequest,
  getTodosSuccess,
  getTodosError,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
} from "../todos/todosActions";

const loaderReducer = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [getTodosRequest]: () => true,
  [getTodosSuccess]: () => false,
  [getTodosError]: () => false,
  [removeTodoRequest]: () => true,
  [removeTodoSuccess]: () => false,
  [removeTodoError]: () => false,
});

export default loaderReducer;
