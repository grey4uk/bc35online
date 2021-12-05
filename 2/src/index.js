import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// // setState(loaderOn) -> setState(data) || setState(error) -> setState(loaderOff)

// const getAction = (data) => ({
//   type: "type",
//   payload: data,
// });

// // const getActionOperation = (data) => (dispatch, getState) => {
// //   console.log("object");
// // };

// const getActionOperation = function (data) {
//   return function (dispatch, getState) {
//     console.log("object");
//     // run async code
//   };
// };

// dispatch(getAction("data")); // {}
// dispatch(getActionOperation("data")); // fn

// const middleware = (store) => (next) => (action) => {}; // es6

// // dispatch("654654")

// function mW({ dispatch, getState }) {
//   // store => { dispatch, getState }
//   // es5
//   return function (next) {
//     return function (action) { action -> {type: "actionType", payload: "data"}
//        action.type ===  "actionType" && concole.log(action)
//       if (typeof action === "function") {
//         action(dispatch, getState);
//       }
//       next(action);
//     };
//   };
// }

// const ownThunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };
