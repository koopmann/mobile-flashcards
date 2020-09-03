import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootreducer";

const middleWare = applyMiddleware(thunk, logger);

export default createStore(rootReducer, middleWare);
