import aboutReducer from "../store/aboutReducer";
import {aboutTypes} from '../store/types';

const initialState = {
    works: [],
    isLoading: false,
}

describe('aboutReducer tests',()=> {
    it('goal: test default type case',()=> {

        const result = aboutReducer(initialState,{type:''})
        expect(result).toEqual(initialState)
    })

    it('goal: test getWorks case', ()=> {
        const action = {
            type: aboutTypes.GET_WORKS,
            payload: [
                {id:'1', title:'Hello!'}
            ]
        }

        const result = aboutReducer(initialState,action)
        expect(result.works[0].title).toBe('Hello!')
    })

    it('goal: test getPics case', ()=> {
        const action = {
            type: aboutTypes.GET_PICS,
            payload:['logo']
        }

        const initialState = {
            works: [
                {id:'1',title:'Nice!'}
            ]
        }

        const result = aboutReducer(initialState,action)
        expect(result.works[0].pic).toBe('logo')
    })

    it('goal: test isLoading case',()=> {

        const result = aboutReducer(initialState,{type:aboutTypes.IS_LOADING, payload:true})
        expect(result.isLoading).toBe(true)
    })
})