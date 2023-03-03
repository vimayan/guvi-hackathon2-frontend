import React from 'react';
import './component.css';
import Contact from './contact';
import MovieList from './movies';
import Navbar from './navbar';


function Home() {
    return ( <div className='home'>

    <Navbar></Navbar>

    
<div id="carouselExampleDark" className="carousel carousel-dark slide mt-4 px-5 shadow-md " data-bs-ride="carousel">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000"> 
      <img className="d-block  imagecarousel rounded rounded-2   " src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block imagecarousel rounded rounded-2 " src="https://images.pexels.com/photos/3692639/pexels-photo-3692639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block  imagecarousel rounded rounded-2 " src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon d-none" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon d-none" aria-hidden="true"></span>
    <span className="visually-hidden ">Next</span>
  </button>
</div>

<MovieList/>
<Contact/>

</div>);
}

export default Home;