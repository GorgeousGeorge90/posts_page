import {postsTypes, asyncPostsTypes} from './types';


export const postsActions = {
    getPosts: payload => ({type: postsTypes.GET_POSTS, payload}),
    getUser: (id,comments) => ({type: postsTypes.GET_USER, payload:{id, comments}}),
    getIsFetching: payload => ({type: postsTypes.IS_FETCHING, payload}),
}

export const asyncPostsActions = {
    asyncGetPosts: () => ({type: asyncPostsTypes.ASYNC_GET_POSTS}),
    asyncGetComments: payload => ({type: asyncPostsTypes.ASYNC_GET_COMMENTS,payload})
}
