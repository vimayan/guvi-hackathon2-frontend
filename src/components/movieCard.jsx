import React from 'react';
import Logban from '../data/banner.jpg'
import { useDispatch } from 'react-redux';
import { SelectedShow } from '../action/showAction';
import { useNavigate } from 'react-router-dom';

function MovieCard({movie}) {

  // {console.log("this is movies",JSON.stringify(movie))}
const dispatch = useDispatch();
const navigate =useNavigate();


const path = window.location.pathname==="/home"





  const handleSubmit =(movie) =>{

     
      if(movie && path ){ 
        dispatch(SelectedShow(movie))
        navigate("/screens")
       
      }
      else{
        
        navigate("/payment")
      }
  }

 

    return ( <>
    <div className="card col   ">
    <img className="card-img-top" src={Logban} height='200px' alt="banner none"/>
    <div className='card-img-overlay h-25 text-end '>
      <span className="badge bg-primary">2D</span>
      </div>
    <div className="card-body">
      <h4 className="card-title">{movie.name}</h4>
      <p className="card-text "><span className='me-1'>{movie.genere}</span><b>{movie.launguage} </b>|<strong>{movie.certified}</strong></p>
      
    </div>
    <button  className="btn btn-success rounded-0 rounded-bottom"  onClick={()=>handleSubmit(movie)}>book</button>
  </div>
    </> )
}

export default MovieCard;