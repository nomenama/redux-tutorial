import {takeLatest} from "redux-saga/effects";
import {GET_USER} from "../ducks/user";
import {handleFetchUser} from "./handlers/user";
import {GET_POST} from "../ducks/post";
import {handleFetchPost} from "./handlers/posts";

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleFetchUser);
    yield takeLatest(GET_POST, handleFetchPost);
}