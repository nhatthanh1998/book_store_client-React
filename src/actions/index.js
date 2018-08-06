import {FETCH_BOOK,ADD_BOOK} from './type'
import axios from 'axios'
export function add_book(){
    return async dispatch =>{
        const new_book = await axios.get('http://localhost:8000/book/create',
            {
                params:{
                    author_id:"b8acecff-45ae-4464-9acb-78f6e77c98e4",
                    title:"test",
                    description:"test",
                    price:50,
                    book_url:'success'
                }
                
            }
        )
        return dispatch({
                type:ADD_BOOK,
                payload:new_book.data
        })
    }
}

export function fetch_all_book(){
    return async dispatch=>{
        const books = await axios.get('http://localhost:8000/book')
        return dispatch({
            type:FETCH_BOOK,
            payload:books.data
        })
    }
}

export function fetch_book_page(page_url){
    return async dispatch=>{
        const books = await axios.get(page_url)
        return dispatch({
            type:FETCH_BOOK,
            payload:books.data
        })
    }
}