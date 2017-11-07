import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger();

//const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// window.store = store;

export default store;