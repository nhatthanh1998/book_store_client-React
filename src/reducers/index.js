import {combineReducers} from 'redux'
import book_reducer from './book_reducer'
export const rootReducer = combineReducers({
    books: book_reducer
})
