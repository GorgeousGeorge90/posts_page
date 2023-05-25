import { takeEvery, put } from 'redux-saga/effects';
import asyncPostsActions from "./asyncActions";



function* postsWorker() {


}

export function* postsWatcher() {
    yield takeEvery(asyncPostsActions.asyncGetPosts, postsWorker)
}