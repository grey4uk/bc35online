import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import counterReducer from './counter/counterReducer';
import stepReducer from './step/stepReducer';
import todosReducer from './todos/todosReducer';
import loaderReducer from './loader/loaderReducer';
import errorReducer from './error/errorReducer';
import valueReducer from './value/valueReducer';
import authReducer from './auth/slice';

// const todosPersistConfig = {
//   key: 'todos',
//   version: 1,
//   storage: storage,
//   whitelist: ['items'],
// };

// const todosPersistReducer = persistReducer(
//   todosPersistConfig,
//   todosReducer
// );

const rootReducer = combineReducers({
  // todos: todosPersistReducer,
  todos: todosReducer,
  counter: counterReducer,
  step: stepReducer,
  isLoading: loaderReducer,
  error: errorReducer,
  value: valueReducer,
  auth: authReducer,
});

export default rootReducer;
