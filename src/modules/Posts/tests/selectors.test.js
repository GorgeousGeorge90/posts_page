import {
    getPosts,
    getIsFetching,
    getCurrentPost,
    getComments,
} from '../selectors/selectors';



const posts = {
    items: [
        {id:'1',title:'Hello!'},
        {id:'2',title:'Hi!'},
    ],
    currentPost: {
        post: {id:2, title:'Hype!'},
        comments: []
    },
    isFetching: true,
}

describe('postSelectors',()=> {
    it('goal: select posts',()=> {
        const result = getPosts({posts})
        expect(result.length).toBe(2)
    })

    it('goal: select isFetching', ()=> {
        const result = getIsFetching({posts})
        expect(result).toBe(true)
    })

    it('goal: select current post', ()=> {
        const result = getCurrentPost({posts})
        expect(result.title).toBe('Hype!')
    })

    it('goal: select comments',()=> {
        const result = getComments({posts})
        expect(result).toEqual([])
    })
})