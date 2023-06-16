import {
    getWorks,
    getIsLoading,
} from '../selectors/selectors';


const about = {
    works:[
        {id:'1',title:'Hello!'}
    ],
    isLoading:true,
}

describe('about selectors tests', ()=> {
    it('goal: test getWorks selector',()=>{

        const result = getWorks({about})
        expect(result[0].title).toBe('Hello!')
    })

    it('goal: test getIsLoading selector',()=> {

        const result = getIsLoading({about})
        expect(result).toBe(true)
    })
})