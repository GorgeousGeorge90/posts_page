import aboutApi from "../api/api";


describe('aboutApi tests',()=> {
    it('goal:get images',async ()=> {

        const data = await aboutApi.getImages()
        expect(data.length).toBe(2)
    })
})