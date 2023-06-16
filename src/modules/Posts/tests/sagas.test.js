import {commentsWorker, postsWorker} from "../store/sagas";
import {asyncPostsTypes, postsTypes} from "../store/types";
import {call, put} from "redux-saga/effects";
import {delay} from "../../../utils/utils";
import postsApi from "../api/api";
import {runSaga} from "redux-saga";
import axios from "axios";


jest.mock('axios')

describe('posts sagas tests',()=> {
    it('goal: test postsWorker order',()=> {

        const gen = postsWorker()
        expect(gen.next().value).toEqual(put({type:postsTypes.IS_FETCHING, payload:true}))
        expect(gen.next().value).toEqual(delay(2000))
        expect(gen.next().value).toEqual(call(postsApi.getPosts))
    })

    it('goal: full test postWorker', async () => {

        const posts = [
            {id:'1', title: 'Hello!'},
            {id:'2', title: 'Buy!'},
        ]

        postsApi.getPosts = jest.fn().mockResolvedValue({data:posts})

        const dispatched = []
        await runSaga({
                dispatch: (action) => dispatched.push(action)
            },
            postsWorker
        ).toPromise()

        expect(dispatched[0].type).toEqual(postsTypes.IS_FETCHING)
        expect(dispatched[1].type).toEqual(postsTypes.GET_POSTS)
        expect(dispatched[1].payload.data).toEqual(posts)
    })

    it('goal: test commentsWorker order',()=> {
        const action = {
            type: asyncPostsTypes.ASYNC_GET_COMMENTS,
            payload:'1',
        }
        const gen = commentsWorker(action)
        expect(gen.next().value).toEqual(put({type:postsTypes.IS_FETCHING, payload:true}))
        expect(gen.next().value).toEqual(delay(2000))
        expect(gen.next().value).toEqual(call(postsApi.getComments, action.payload))
    })

    it('goal: full test commentsWorker', async ()=> {

        const userId = '1'
        const action = {
            payload: {
                userId,
                comments: [
                    {id:'1', title: 'Nice!'},
                ]
            }
        }

        const currentPost = {
            comments: [
                {id:'1', title: 'Nice!'},
            ],
            post: {userId}
        }

        postsApi.getComments = jest.fn().mockResolvedValue(currentPost)

        const dispatched = []
        await runSaga({
                dispatch: (action) => dispatched.push(action)
            },
            commentsWorker,
            action,
        ).toPromise()

        expect(dispatched[0].type).toEqual(postsTypes.IS_FETCHING)
        expect(dispatched[1].type).toEqual(postsTypes.GET_CURRENT_POST)
    })
})