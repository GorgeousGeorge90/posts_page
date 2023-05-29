import {postsTypes} from './types';


const initialState = {
    posts:[],
    currentUser: {
        user: null,
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

        case postsTypes.GET_USER: {
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    user: state.posts.filter(post=> post.userId === action.payload.id)[0],
                    comments: action.payload.comments,
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