import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/services/firebaseApi";
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
} from "./todosActions";

export const addTodo = (todo) => (dispatch) => {
  dispatch(addTodoRequest()); // {type: "addTodoRequest"}

  addTodoApi(todo)
    .then((data) => dispatch(addTodoSuccess(data)))
    .catch((err) => dispatch(addTodoError(err.message)));
};

export const getTodos = () => (dispatch) => {
  dispatch(getTodosRequest()); // {type: "getTodosRequest"}

  getTodosApi()
    .then((data) => dispatch(getTodosSuccess(data)))
    .catch((err) => dispatch(getTodosError(err.message)));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(removeTodoRequest()); // {type: "removeTodoRequest"}

  removeTodoApi(id)
    .then((data) => dispatch(removeTodoSuccess(data)))
    .catch((err) => dispatch(removeTodoError(err.message)));
};
