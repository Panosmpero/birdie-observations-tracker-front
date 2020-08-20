import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import initialState from "./initialState";
import rootSaga from "./sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
