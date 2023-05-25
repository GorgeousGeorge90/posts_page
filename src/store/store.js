import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import postsReducer from "../modules/Posts/store/postsReducer";



const rootReducer = combineReducers({
    postsPage:postsReducer,
})

const saga = createSagaMiddleware()

const store = legacy_createStore(rootReducer, applyMiddleware(saga))

export default store