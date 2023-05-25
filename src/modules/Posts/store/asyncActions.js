import asyncPostsTypes from './asyncTypes';


const asyncPostsActions = {
    asyncGetPosts: payload => ({type: asyncPostsTypes.ASYNC_GET_POSTS, payload})
}

export default asyncPostsActions