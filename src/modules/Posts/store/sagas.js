import { takeEvery, put, call } from 'redux-saga/effects';
import {postsActions} from "./actions";
import {delay} from "../../../utils/utils";
import postsApi from "../api/api";
import {asyncPostsTypes} from "./types";


function* postsWorker() {
    yield put(postsActions.getIsFetching(true))
    yield delay(2000)
    const posts = yield call(postsApi.getPosts)
    yield put(postsActions.getPosts(posts))
    yield put(postsActions.getIsFetching(false))
}

function* commentsWorker(action) {
    yield put(postsActions.getIsFetching(true))
    yield delay(2000)
    const comments = yield call(postsApi.getComments, action.payload)
    yield put(postsActions.getCurrentPost(action.payload, comments))
    yield put(postsActions.getIsFetching(false))
}

export function* postsWatcher() {
    yield takeEvery(asyncPostsTypes.ASYNC_GET_POSTS, postsWorker)
    yield takeEvery(asyncPostsTypes.ASYNC_GET_COMMENTS, commentsWorker)
}