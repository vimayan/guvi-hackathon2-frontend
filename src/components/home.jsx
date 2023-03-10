import React,{useEffect, useState} from 'react';
import './component.css';
import Contact from './contact';
import MovieList from './movieList';
import Navbar from './navbar';
import CinemaHall from './cinemaHall';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { GetMovies,GetCinemaHall,SelectedShow,SelectedScreen,SeatSelected,IsSeatHolded,IsSeatBooked } from '../action/showAction';


function Home() {
  const navigate = useNavigate()
  const jwtToken = localStorage.getItem('token')
  const admin = localStorage.getItem('admin')

  const user = admin==="true"?"admin":"user"


  const dispatch = useDispatch();


useEffect(()=>{
  dispatch(SelectedShow({}));
  dispatch(SelectedScreen({}));
  dispatch(SeatSelected());
  dispatch(IsSeatHolded([]));
  dispatch(IsSeatBooked([]))
},[dispatch])

  useEffect(()=> {
   
  
    if(!jwtToken){
      navigate('/')
    }
  },[navigate,jwtToken])


  useEffect(()=> {

axios.get(`http://localhost:5000/home/showmovies/${user}`,
{headers: {
  'token': jwtToken
}}
).then((response)=>{

dispatch(GetMovies(response.data));

}

     
)
  .catch((err)=>console.log(err)) 
    

 },[dispatch,jwtToken,user])


 useEffect(()=> {

  axios.get(`http://localhost:5000/home/showcinemahall/${user}`,
  {headers: {
    'token': jwtToken
  }}
  ).then((response)=>{
 
    dispatch(GetCinemaHall(response.data));
  // setCinemaHall([...response.data]);
}
  
       ).catch((err)=>console.log(err))
    
      
  
   },[dispatch,jwtToken,user])
  




  const [view, setView] = useState(true);

  const viewMovies=()=>{
    setView(true)
  }

  const viewCinemaHall=()=>{
    setView(false)
  }

    return ( <div className='home'>

    <Navbar viewMovies={viewMovies} viewCinemaHall={viewCinemaHall} ></Navbar>

    
<div id="carouselExampleDark" className="carousel carousel-dark slide mt-4 px-5 shadow-md " data-bs-ride="carousel">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item " > 
      <img className="d-block  imagecarousel rounded rounded-2   " src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"/>
    </div>
    <div className="carousel-item active" data-bs-interval="500" >
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
{view? <MovieList   />:<CinemaHall  />}




<Contact/>

</div>);
}

export default Home;