import {takeLatest} from "redux-saga/effects";
import {GET_USER} from "../ducks/user";
import {handleFetchUser} from "./handlers/user";

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleFetchUser);
}