import postsReducer from "../store/postsReducer";
import {postsTypes} from "../store/types";
export {postsTypes} from './../store/types';


const posts = {
    items:[],
    currentPost: {
        post: {
            id:'20',
            userId:'15',
            title:'Hi!',
            body:'Nice!'
        },
        comments: [],
    },
    isFetching: false,
}

describe('postsReducer', ()=> {
    it('goal:get default type in postsReducer',()=> {
        const result = postsReducer(posts,({type:''}))

        expect(result).toEqual(posts)
    })

    it('goal: get posts to state', ()=> {
        const payload = [{
            id:'12',
            userId:'13',
            title:'Hello',
            body:'Nice to meet you!'
        }]

        const result = postsReducer(posts,({type:postsTypes.GET_POSTS, payload}))
        expect(result.items.length).toBe(1)
    })

    it('goal: set current post',()=> {
        const payload = {
            id: '15',
            comments: [{name:'nice'}],
        }

        const action = ({type:postsTypes.GET_CURRENT_POST, payload})

        const result = postsReducer(posts, action)
        expect(result.currentPost.comments.length).toBe(1)
    })

    it('goal: clear currentPost',()=> {

        const result = postsReducer(posts,{type:postsTypes.CLEAR_POST})
        expect(result.currentPost.post).toBe(null)
    })

    it('goal: get loading during receiving data', ()=> {
        const action = ({type:postsTypes.IS_FETCHING, payload:true})

        const result = postsReducer(posts, action)
        expect(result.isFetching).toBe(true)
    })

});