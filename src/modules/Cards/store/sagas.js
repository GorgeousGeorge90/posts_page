import {put,call,takeEvery} from 'redux-saga/effects';
import {asyncAboutTypes} from './types';
import {aboutActions} from './actions';
import aboutApi from "../api/api";
import {delay} from "../../../utils/utils";

export function* getWorksWorker() {
    yield put(aboutActions.isLoading(true))
    yield delay(2000)
    const works = yield call(aboutApi.getWorks)
    yield put(aboutActions.getWorks(works))
    const pics = yield call(aboutApi.getImages)
    yield put(aboutActions.getPics(pics))
    yield put(aboutActions.isLoading(false))
}

export function* aboutWatcher() {
    yield takeEvery(asyncAboutTypes.GET_ASYNC_WORKS, getWorksWorker)
}