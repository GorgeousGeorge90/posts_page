export const getPosts = state => state.posts.items
export const getIsFetching = state => state.posts.isFetching
export const getCurrentPost = state => state.posts.currentPost.post
export const getComments = state => state.posts.currentPost.comments
