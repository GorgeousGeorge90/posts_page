import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import postsReducer from "../modules/Posts/store/postsReducer";
import aboutReducer from "../modules/Cards/store/aboutReducer";
import {rootWatcher} from "./index";



const rootReducer = combineReducers({
    postsPage:postsReducer,
    aboutPage:aboutReducer,
})

const saga = createSagaMiddleware()

const store = legacy_createStore(rootReducer, applyMiddleware(saga))

saga.run(rootWatcher)

window.store = store

export default store