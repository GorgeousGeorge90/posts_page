import postsTypes from "./types";


const initialState = {
    posts:[],
}

const postsReducer = (state,action) => {
    switch (action.types) {

        case postsTypes.GET_POSTS: {
            return {
                ...state,
                posts: action.payload,
            }
        }

        default:
            return state
    }
}

export default postsReducer