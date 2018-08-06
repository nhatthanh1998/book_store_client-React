import React from 'react'
import styled from 'styled-components'
import {fetch_book_page} from '../actions/index'
const SlideContainer = styled.div`
width:100%;
height:35rem;
background-color:red;
.full_size{
    width:100%;
    height:100%;
}
`
export default class Slider extends React.Component{
  componentDidMount(){
    var page_url = 'http://localhost:8000/book/random'
    this.props.dispatch(fetch_book_page(page_url))
  }
    render(){
        return (

            <SlideContainer>
                <div id="carouselExampleControls" class="carousel slide full_size" data-ride="carousel">
  <div class="carousel-inner full_size">
    <div class="carousel-item active">
      <img class="d-block w-100" src="http://www.ntybooks.com/Data/File/0A9B4533EB7F89E49E72FF09CAB7DA3E.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn02.static-adayroi.com/0/2017/03/13/148940055355_8418489.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://www.ntybooks.com/Data/File/0A9B4533EB7F89E49E72FF09CAB7DA3E.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            </SlideContainer>
            
        )
    }
}