import {call, put} from "redux-saga/effects";
import {fetchPost} from "../requests/posts";
import {setPost} from "../../ducks/post";

export function* handleFetchPost(): any {
    try {
        const response = yield call(fetchPost);
        const {data} = response;

        yield put(setPost(data));
    } catch (err) {
        console.log("__err", err);
    }
}