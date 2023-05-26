import {aboutTypes} from "./types";



const initialState = {
    works: [],
    isLoading: false,
}

const aboutReducer = (state = initialState,action) => {
    switch (action.type) {

        case aboutTypes.GET_WORKS: {
            return {
                ...state,
                works: action.payload,
            }
        }

        case aboutTypes.GET_PICS: {
            return {
                ...state,
                works: state.works.map((item,i)=> {
                    return {
                        ...item,
                        pic:action.payload[i]
                    }
                })
            }
        }

        case aboutTypes.IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }

        default:
            return  state
    }
}

export default aboutReducer