import {aboutTypes, asyncAboutTypes} from "./types";


export const aboutActions = {
    getWorks: payload => ({type: aboutTypes.GET_WORKS, payload}),
    getPics: payload => ({type: aboutTypes.GET_PICS, payload}),
    isLoading: payload => ({type: aboutTypes.IS_LOADING, payload})
}

export const asyncAboutActions = {
    getAsyncWorks: ()=> ({type: asyncAboutTypes.GET_ASYNC_WORKS})
}