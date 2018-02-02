import {ActionTypes} from '../action/action'
const INITIAL_STATE = {
    todos:[],
}
function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case ActionTypes.GETTINGTODO:
            return ({
                ...state,
                todos:action.payload
            })
            case ActionTypes.DELETINGTODO:
            return ({
                ...state,
                todos:action.payload
            })
            case ActionTypes.DELETEALL:
            return ({
                todos:action.payload
            })
        default:
            return state;
    }

}
export default reducer; 