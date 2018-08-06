import {FETCH_BOOK,ADD_BOOK} from '../actions/type'
export default function(state=[],action){
    switch(action.type){
        case FETCH_BOOK:{
            return action.payload
        }
        case ADD_BOOK:{
            const data = state.push(action.payload)
            return data
        }
    }
    return state
}