import React, { useEffect } from 'react';
import Navbar from './navbar';
import Seats from './seats';
import MovieCard from './movieCard';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';








function Booking() {

  const bookmyshow = useSelector((states)=>states.bookmyshow)

  const {selectedShow,selectedScreen} = bookmyshow

  const navigate = useNavigate()


 useEffect(()=>{
  if(!selectedShow.name || !selectedScreen.name){

    navigate("/home")

  }
 },[selectedScreen,selectedShow,navigate])
  

    return ( <>
    <Navbar/>
    <hr /><div className='container'>
        <div className='row'>
          <div className='col-2 '>
 <span className='fw-bold rounded-0  px-5 fs-5 py-2 me-auto  badge bg-info '>
 {selectedScreen.name}
</span>
          </div>
          <hr />

        </div>
        <div className='row'>
<div className='col'>
<Seats/>

</div>
<div className='col-6 col-sm-4 mt-5 col-md-3'>
<MovieCard movie={selectedShow}/>

</div>
        </div>

    </div> 
   
    </> );
}

export default Booking;