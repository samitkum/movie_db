import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./Reducer";
import ReduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [ReduxThunk];
const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
