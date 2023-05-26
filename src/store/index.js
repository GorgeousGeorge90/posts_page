import {all} from 'redux-saga/effects';
import {aboutWatcher} from '../modules/Cards/store/sagas';





export function* rootWatcher() {
    yield all([aboutWatcher()])
}