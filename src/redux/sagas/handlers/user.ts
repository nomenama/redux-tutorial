import {call, put} from "redux-saga/effects";
import {ReducerAction} from "react";
import {fetchUser} from "../requests/user";
import {setUser} from "../../ducks/user";

export function* handleFetchUser(action: ReducerAction<any>): any {
    try {
        const response = yield call(fetchUser);
        const {data} = response;

        yield put(setUser(data));
    } catch (err) {
        console.log("__err", err);
    }
}