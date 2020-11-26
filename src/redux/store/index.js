import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers";

export const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
