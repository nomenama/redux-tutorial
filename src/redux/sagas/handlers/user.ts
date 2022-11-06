import {call, put} from "redux-saga/effects";
import {ReducerAction} from "react";
import {fetchUser} from "../requests/user";
import {setUser} from "../../ducks/user";

export function* handleFetchUser(action: ReducerAction<any>): any {
    try {
        const randomId = Math.floor(Math.random() * 10) + 1;

        const response = yield call(() => fetchUser(randomId));
        const {data} = response;

        yield put(setUser(data));
    } catch (err) {
        console.log("__err", err);
    }
}