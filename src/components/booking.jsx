import React from 'react';
import Navbar from './navbar';
import Seats from './seats';
import MovieCard from './movieCard';

import { useSelector } from 'react-redux';








function Booking() {

  const bookmyshow = useSelector((states)=>states.bookmyshow)

  const {selectedShow} = bookmyshow
 
  

    return ( <>
    <Navbar/>
    <hr /><div className='container'>
        
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