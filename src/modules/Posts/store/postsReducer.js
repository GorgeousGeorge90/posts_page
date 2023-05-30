import {postsTypes} from './types';


const initialState = {
    posts:[],
    currentPost: {
        post: null,
        comments: [],
    },
    isFetching: false,
}

const postsReducer = (state = initialState,action) => {
    switch (action.type) {

        case postsTypes.GET_POSTS: {
            return {
                ...state,
                posts: action.payload,
            }
        }

        case postsTypes.GET_CURRENT_POST: {
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    post: state.posts.filter(post=> post.userId === action.payload.id)[0],
                    comments: action.payload.comments,
                }
            }
        }

        case postsTypes.CLEAR_POST: {
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    post: null,
                    comments: [],
                }
            }
        }

        case postsTypes.IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload,
            }
        }

        default:
            return state
    }
}

export default postsReducer