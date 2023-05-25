import {postsTypes} from './types';


const postsActions = {
    getPosts: payload => ({type: postsTypes.GET_POSTS, payload})
}

export default postsActions