import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {watcherSaga} from "./sagas/rootSaga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import postReducer from "./ducks/post";

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    post: postReducer
});

const sagaMiddleware = createSagaMiddleware();

//add additional middlewares to the array
const allMiddleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...allMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;