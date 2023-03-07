import MovieCard from "./movieCard";
import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const MovieCarousel = () => {

  
    const bookmyshow = useSelector(state => state.bookmyshow)
    const {movies} =bookmyshow
    

    const [showMovies,setShowMovies] =useState([]);
    useEffect(()=>{
        setShowMovies([...movies])
 
    },[movies])
    
   
   
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items:3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    
    return <div>
<Carousel responsive={responsive}>
    
    { showMovies.map((movie,index)=>
    <div key={index} className='col mx-2'>
    {/* {console.log("this is movies",JSON.stringify(movie))} */}
 <MovieCard movie={movie}/>
 
    </div>
    
    )
      }
     </Carousel>

    </div> 
     }