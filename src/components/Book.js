import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import webfont from 'webfontloader'
import _ from 'lodash'
import { fetch_all_book,fetch_book_page } from '../actions/index'

webfont.load({
    google:{
        families:['Lora']
    }
})
const NewBook = styled.div`
text-align:center;
font-family: 'Lora', serif;
font-size:4rem;
margin-bottom:5rem;
`

const Page = styled.div`
margin-top:5rem;
`


const BookCard = styled.div`
height:40rem;
width:70%;
.book_image{
    height:25rem;
    width:100%;
}
.seperator{
    width:100%;
    height:2rem;
    margin-top:1rem;
}
.book_title{
    width:100%;
    margin-top:1rem;
    font-size:1.3rem;
    text-align:center;
    font-family: 'Lora', serif;
    
}
.book_price{
    margin-top:.5rem;
    font-family: 'Lora', serif;
    font-size:1.4rem;
    text-align:center;
}
`
class Book extends React.Component {
    constructor(props){
        super(props)
        this.state={
            page:1
        }
    }
    componentDidMount() {
        this.props.dispatch(fetch_all_book())
    }


    render_book_list(){
        if (this.props.books.length !== 0) {
            {
                return this.props.books.data.map(book => {
                    return (
                            <div className="col-4">
                                <BookCard>
                                <img className="book_image" src={book.book_url} />
                                <img className="seperator" src="https://www.pidl.org/site-assets/images/line.png/@@images/image.png"/>
                                <div className="book_title">
                                    {book.title}
                                </div>
                                <div className="book_price">
                                    {book.price.toLocaleString()} đ
                                </div>
                                </BookCard>
                            </div>
                            
                    )
                })
            }
        }
    }


    handle_change_page(page){
        var current_page = document.getElementById(`${this.state.page}`)
        current_page.classList.remove("active")
        this.setState({
            page:page
        })
        current_page = document.getElementById(`${page}`)
        current_page.classList.add("active")
        var page_url = `http://localhost:8000/book?page=${page}`
        this.props.dispatch(fetch_book_page(page_url))
    }
    


    render_book_page(){
        if(this.props.books.last_page){
            var total = this.props.books.last_page
            var pages = _.range(1,total+1);
            return pages.map(page=>{
                if(page === 1){
                    return (
                        <li className="page-item active" id={page}>
                        <a className="page-link" href="" onClick = {()=>{
                        this.handle_change_page(page)
                        }}>{page}<span class="sr-only">(current)</span></a>
                        </li>
                    )
                }else{
                    return(
                        <li className="page-item" id={page}>
                        <a className="page-link" href="#" onClick = {()=>{
                        this.handle_change_page(page)
                        }}>{page}<span class="sr-only">(current)</span></a>
                        </li>
                    )
                }
            })
        }
    }
    render() {
        return(
            <div className="container">
                <NewBook>
                    New Book<br/>
                    <img src="http://www.clker.com/cliparts/d/6/B/b/U/l/purple-divider-hi.png"/>
                </NewBook>
                <div className = "row">
                {this.render_book_list()}
                </div>
                <Page>
                <ul className="pagination pagination-lg justify-content-center">
                    {this.render_book_page()}
                </ul>
                </Page>
                
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(Book)