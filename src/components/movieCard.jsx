import React from 'react';
import Logban from '../data/banner.jpg'


function MovieCard(props) {
    return ( <>
    <div className="card   ">
    <img className="card-img-top" src={Logban} height='200px' alt="banner none"/>
    <div className='card-img-overlay h-25 text-end '>
      <span className="badge bg-primary">2D</span></div>
    <div className="card-body">
      <h4 className="card-title">Movie</h4>
      <p className="card-text"><span className='text-decoration-line-through text-muted'>thriller</span>
    U</p>
      <a href="#blank"  className="btn btn-outline-dark">book</a>
    </div>
  </div>
    </> );
}

export default MovieCard;