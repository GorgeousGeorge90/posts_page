import {getWorksWorker} from '../store/sagas';
import {aboutTypes} from "../store/types";
import {call, put} from "redux-saga/effects";
import {delay} from "../../../utils/utils";
import aboutApi from "../api/api";
import {runSaga} from "redux-saga";





describe('test saga getWorksWorker',()=> {
    it('goal: test getWorksWorker order',()=> {

        const gen = getWorksWorker()
        expect(gen.next().value).toEqual(put({type:aboutTypes.IS_LOADING, payload:true}))
        expect(gen.next().value).toEqual(delay(2000))
        expect(gen.next().value).toEqual(call(aboutApi.getWorks))
    })

    it('goal: full test getWorksWorker', async ()=> {

        const works = [
            {id:'1',title:'Hi!'},
            {id:'2',title:'Good!'},
        ]
        const pic = ['pic1','pic2']

        aboutApi.getWorks = jest.fn().mockResolvedValue({data:works})
        aboutApi.getImages = jest.fn().mockResolvedValue({data:pic})

        const dispatched = []
        await runSaga({
                dispatch: (action) => dispatched.push(action)
            },
            getWorksWorker
        ).toPromise()

        expect(dispatched[0].type).toEqual(aboutTypes.IS_LOADING)
        expect(dispatched[1].type).toEqual(aboutTypes.GET_WORKS)
        expect(dispatched[1].payload.data).toEqual(works)
        expect(dispatched[2].type).toEqual(aboutTypes.GET_PICS)
        expect(dispatched[2].payload.data).toEqual(pic)
    })
})