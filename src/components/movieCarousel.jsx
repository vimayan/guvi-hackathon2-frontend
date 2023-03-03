import MovieCard from "./movieCard";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const MovieCarousel = ({ movies }) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div style={{width:"90%",margin:"auto"}}>
            <Carousel responsive={responsive} >
                {
                    movies?.map(movie => (
                        <div  style={{width:"80%",margin:"auto"}}>
<MovieCard {...movie} key={movie._id} />
                        </div>
                        
                    ))
                }
            </Carousel>
        </div >
    )
}