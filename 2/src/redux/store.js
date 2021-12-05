import { configureStore } from '@reduxjs/toolkit';
// import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { updateObjToArrMW } from '../utils/middleware/updateObjToArrMW';

// const ownLogger = (store) => (next) => (action) => {
//   console.group('action_ownLogger', action.type);
//   const prevState = store.getState();
//   console.log('prevState', prevState);
//   console.log('action', action);
//   next(action);
//   const nextState = store.getState();
//   console.log('nextState', nextState);
//   console.groupEnd();
// };

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        ignoredPaths: ['firebase'],
      },
    }),
  // .concat(logger, updateObjToArrMW, ownLogger), //[logger, ownLogger],
  devTools: process.env.NODE_ENV !== 'production', // => true || false
});

export const persistor = persistStore(store);

// {
// store
// next
// ownLogger(store)(next)(action)
// }
