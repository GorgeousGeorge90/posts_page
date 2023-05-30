import {postsTypes, asyncPostsTypes} from './types';


export const postsActions = {
    getPosts: payload => ({type: postsTypes.GET_POSTS, payload}),
    getCurrentPost: (id,comments) => ({type: postsTypes.GET_CURRENT_POST, payload:{id, comments}}),
    getClearPost: () => ({type: postsTypes.CLEAR_POST}),
    getIsFetching: payload => ({type: postsTypes.IS_FETCHING, payload}),
}

export const asyncPostsActions = {
    asyncGetPosts: () => ({type: asyncPostsTypes.ASYNC_GET_POSTS}),
    asyncGetComments: payload => ({type: asyncPostsTypes.ASYNC_GET_COMMENTS,payload})
}
