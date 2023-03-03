import React from 'react';
import Navbar from './navbar';
import Seats from './seats';
import MovieCard from './movieCard';






function Booking() {
    return ( <>
    <Navbar/>
    <hr /><div className='container'>
        
        <div className='row'>
<div className='col'>
<Seats/>

</div>
<div className='col-6 mt-5 col-md-3'>
<MovieCard/>

</div>
        </div>

    </div> 
   
    </> );
}

export default Booking;