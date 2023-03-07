import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import {SelectedScreen} from '../action/showAction'




function CinemaHall() {
    const bookmyshow = useSelector(state => state.bookmyshow)
    const {cinemaHall} =bookmyshow
    // console.log("this is cinema Hall",JSON.stringify(cinemaHall[0]));
    const dispatch = useDispatch()
    const navigate =useNavigate()

    const [screens,setScreen] =useState([]);
    useEffect(()=>{
       
        setScreen(cinemaHall)
 
    },[cinemaHall])

    const handleSubmit =(screen) =>{

        dispatch(SelectedScreen(screen))
        if(screen) navigate("/booking");
    }

    
    return (
    <div className='container-fluid mt-4' id='Cinemahall'> 
        <div className='row'>
        <h5 className='text-decoration-underline'> THEATERS </h5>          
        </div>
{
    screens.map((screen,index) =>
  
    <div className='row mt-4 ' key={index}>
        {/* {console.log(JSON.stringify(screen))} */}
        
        <div className='col-7 d-flex flex-nowrap mx-auto'>
        <div className='col-2 d-none d-md-inline'>
                <img className='img-thumbnail ' src="https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
            </div>
            <div className=' col d-flex flex-column text-start ms-3'>
                <h5>
                {screen.name}
                </h5>
                <span className='text-muted'>
               {screen.address[0].place}
                </span>
            </div>
            <div className='col-3 ms-1'>
                <button className='btn btn-secondary' onClick={()=>{handleSubmit(screen)}}>
                    book
                </button>
            </div>
        </div>
          
        </div>
          )
        }

        </div>);
}

export default CinemaHall;