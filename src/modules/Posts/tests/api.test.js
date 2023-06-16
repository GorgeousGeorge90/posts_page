import postsApi from "../api/api";

describe('postsApi tests', ()=> {
    it('goal: get posts', async ()=> {
        const data = await postsApi.getPosts()
        expect(data.length).toBe(100)
    })

    it('goal: get comments', async ()=> {
        const postId = '1'
        const data = await postsApi.getComments(postId)
        expect(data.length).toBe(5)
    })
})