import {AuthMeThunk} from "../data/AuthReducer"
import {GetProfileThunk} from "./ProfileReduser";

const INITIALIZATED = 'Init/INITIALIZATED'

let DefaultState = {inition: false}

const InitializateReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case INITIALIZATED : {
            return {
                ...state,
                inition: true
            }
        }
        default :
            return state
    }
}

export const initializating = () => ({type: INITIALIZATED})



export const InitializationAPPthunk = () => async (dispatch,getState) => {

        let promise = dispatch(AuthMeThunk())
       await Promise.all([promise]);
    const MyId = getState().Auth.userId
    if(MyId){
        dispatch(GetProfileThunk(MyId))
    }
            dispatch(initializating())
    }

export default InitializateReducer