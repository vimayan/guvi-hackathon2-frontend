import React,{useState,useEffect} from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {GetMovies} from '../action/showAction';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MovieSetting() {
   const jwtToken = localStorage.getItem('token');


    const dispatch = useDispatch();
    const bookmyshow = useSelector(state => state.bookmyshow)
    const {movies} =bookmyshow

    //  console.log(movies[0].released_on);
    // console.log(new Date(movies[0].released_on));
  


    const initialscreen = {
        name:'',
        cast:[
            {name:'',profession:''}
        ],
        crew:[{
            name:'',
            profession:''
        }
    
    ],
        rating:'',
        launguage:'',
        certified:'',
        length:'',
        released_on:new Date()
            }
     
        const [movie,setMovie]=useState(initialscreen)
        const [movieUpdate,setmovieUpdate] = useState(false);

        const [castcount,setCastCount] =useState([0])
        const [crewcount,setCrewCount] =useState([0])
        const [startDate,setStartDate] = useState(movie.released_on)



    useEffect(()=> {

        axios.get("/showallmovies/admin",
         {headers: {
          'token': jwtToken
        }}
        ).then((response)=>{
        
        dispatch(GetMovies(response.data));
        
        }
        
             
        )
          .catch((err)=>console.log(err)) 
            
        
         },[])




         const changeCast = (e)=>{
            const value  = castcount.length;
            e.preventDefault()

           
            const newMovie = {...movie};
          
              if( e.target.name==='increase' && newMovie.cast.length <=value){
                  
            newMovie.cast=[...newMovie.cast,{
                name:'',
                profession:''
            } ]
                setMovie(newMovie)
               
               
            setCastCount([...castcount,value]);
                                                
                  }       
        else{
             setCastCount([...castcount,value]);
        }
        console.log( newMovie.cast);


             if(e.target.name==='decrease')  {


                if(value>1){
                    const castArray = [...newMovie.cast ]
                    castArray.pop()

                     newMovie.cast  = [...castArray]
                     setMovie(newMovie);


                     const newCastcount =[...castcount]
                     newCastcount.pop()        
                     setCastCount([...newCastcount]);
                }
                else{
                    setCastCount([0])
                }
              
           

             }   

         }

         const changeCrew = (e)=>{
             
            e.preventDefault()

            const newMovie = {...movie};
           
            const value  = crewcount.length;

            if(  e.target.name==='increase' ){
               
                if(newMovie.cast.length <=value){
                    newMovie.crew=[...newMovie.crew,{
                        name:'',
                        profession:''
                    } ]
    
                    setMovie(newMovie)
                     setCrewCount([...crewcount,value]);
                }
                else{
                    setCrewCount([...crewcount,value]);
                }
               
               


                                                }
            
            if(e.target.name==='decrease')  {

                if( value>1){

                    const crewArray = [...newMovie.crew ]
                    crewArray.pop()
                        newMovie.crew  = [...crewArray]
                        
                        const newCrewCount =[...crewcount]
                        newCrewCount.pop()
                        setCrewCount([...newCrewCount]);
                        setMovie(newMovie);

                }
                else{
                    setCrewCount([0])
                }

                }  



        }


        const inputChangeHandler = (e) =>{
                const newMovie = {...movie};
                newMovie[e.target.name] = e.target.value;
                setMovie(newMovie)

                
            
        }

        const inputChangeHandlerCast = (e,index)=>{

            const newMovie = {...movie};
       
            newMovie.cast[`${index}`][e.target.name] = e.target.value;

            setMovie(newMovie)



        }

        const inputChangeHandlerCrew = (e,index)=>{

            const newMovie = {...movie};
            newMovie.crew[`${index}`][e.target.name] = e.target.value;

            setMovie(newMovie)


        }

        const handleDate = (date)=>{
        
            const d = new Date(date)
            setStartDate(date)
            const newMovie = {...movie};
            newMovie.released_on = d
            setMovie(newMovie)
        }



         const editMovie = (movieList)=>{
            setCastCount([0])
            setCrewCount([0])
            setMovie(movieList)
            setmovieUpdate(true)
           
        }

        const removeMovie = (movieList)=>{


            axios.delete(`/deletemovie/admin/${movieList._id}`,{headers: {
                'token': jwtToken
              }}).then((response)=>{
             console.log(response.data);  
                dispatch(GetMovies(response.data));
            }
              
                   ).catch((err)=>console.log(err))


        }


        const onFormSubmitted =(e)=>{


            e.preventDefault();
            console.log(JSON.stringify(movie));
    
            axios.post("/addmovie/admin",movie,{headers: {
                'token': jwtToken
              }}).then((response)=>{
             console.log(response);  
                dispatch(GetMovies(response.data));
            }
              
                   ).catch((err)=>console.log(err))



        }

        const updatechange = ()=>{


            console.log(movie._id);

            axios.put("/updatemovies/admin",movie,{headers: {
                'token': jwtToken
              }}).then((response)=>{
             console.log(response);  
                dispatch(GetMovies(response.data));
            }
              
                   ).catch((err)=>console.log(err))
            
            
                setmovieUpdate(false);
                setMovie(initialscreen);
            

        }




    return ( <>
    <div className='container-flex'>
   
   <div className='row'>
<div className='col'>


    {
        
        movies.map((movieList,index) =>
  
    <div className=' row mt-5 ' key={index}>
        
        <div className='col-9 d-flex  me-auto'>
    
            <div className=' col-12 row text-start ms-3'>

            <div className='col-12 d-flex  gap-3'>
            <h5 >
                {movieList.name} | {movieList.launguage}
                </h5>
                <span>
                {movieList.length} / {movieList.certified}
                </span>

                
            </div>
                

                
               
                {movieList.cast.map((castmebers,index)=><div className=' col text-nowrap text-start me-3' key={index}>
                
                <span>
                    {castmebers.name}|
                </span>
                <span >
                {castmebers.profession}
                </span>
                
                </div>)}

                <hr />
            
                {movieList.crew.map((castmebers,index)=><div className=' col text-nowrap  text-start me-3' key={index}>
                
                <span className='d-inline'>
                    name:{castmebers.name}|
                </span>
                <span className='d-inline'>
                {castmebers.profession}
                </span>
                
                </div>)}
    
            
            </div>
            <div className=' ms-1 d-flex align-self-center gap-1'>
                <button className='btn btn-secondary btn-sm' onClick={()=>{editMovie(movieList)}}>
                    edit
                </button>
                <button className='btn btn-secondary btn-sm' onClick={()=>{removeMovie(movieList)}}>
                    remove
                </button>
            </div>
        </div>
          
        </div>
    )}
</div>
<div className='col-6 col-md-4 mt-5'>
            <form className='user-form ' onSubmit={onFormSubmitted}>

                <div className='container '>

                        <div className="row text-start">
                            <div className="col"><label htmlFor='name' className='label-control'>Name: </label><br />
                            <input id="username" type="text" className="input-control" name="name" onChange={inputChangeHandler} value={movie.name}></input>
                            </div>

                            <div className="col"> <label htmlFor='rating' className='label-control'>Rating: </label><br />
                            <input id="rating" type="text" className="input-control" name="rating" onChange={inputChangeHandler} value={movie.rating}></input>
                            </div>

                            <div className="col">
                            <label htmlFor='launguage' className='label-control'>Launguage </label><br />
                            <input id="launguage" type="text" className="input-control" name="launguage" onChange={inputChangeHandler} value={movie.launguage}></input>
                            </div>
                            <div className="col">

                            <label htmlFor='genere' className='label-control'>Genere </label><br />
                            <input id="genere" type="text" className="input-control" name="genere" onChange={inputChangeHandler} value={movie.genere}></input>
                            </div>

                            <div className="col">
                            <label htmlFor='certified' className='label-control'>Certified </label><br />
                            <input id="certified" type="text" className="input-control" name="certified" onChange={inputChangeHandler} value={movie.certified}></input>
                            </div>

                            <div className="col">
                            <label htmlFor='city' className='label-control'>Length: </label><br />
                            <input id="city" type="text" className="input-control" name="length" onChange={inputChangeHandler} value={movie.length}></input>
                            </div>


                           
                            <div className="col d-flex flex-column  gap-3 mt-4">
                                {castcount.map((cast,index)=><div key={index}>
                                          <div className="col ">
                                        <label htmlFor='name' className='label-control'>CastName: </label><br />
                                        <input id="name" type="text" className="input-control" name="name" onChange={(e)=>inputChangeHandlerCast(e,index)} value={movie.cast[`${index}`]["name"]}></input>
                                        </div>

                                        <div className="col">
                                        <label htmlFor='profession' className='label-control'>Profession: </label><br />
                                        <input id="profession" type="text" className="input-control" name="profession" onChange={(e)=>inputChangeHandlerCast(e,index)} value={movie.cast[`${index}`]["profession"]}></input>
                                        </div>
                                </div>



                                )}
                              <div className='col '>
                                
                                    <div className="btn-group-sm" role="group" aria-label="Basic example">
                                    <button className=' btn btn-secondary ' name="increase" onClick={changeCast}>
                                        +
                                        </button>
                                        <button className=' btn btn-warning ' name="decrease" onClick={changeCast}>
                                        -
                                        </button>
                                    </div>
                                

                              </div>
                            
                                
                     
                            </div>

                  

                            <div className="col d-flex flex-column  gap-3 mt-4">
                                {crewcount.map((crews,index)=>
                                        <div key={index} >
                                                 <div className="col">
                                                <label htmlFor='name' className='label-control'>CrewName: </label><br />
                                                <input id="name" type="text" className="input-control" name="name" onChange={(e)=>inputChangeHandlerCrew(e,index)} value={movie.crew[`${index}`].name}></input>
                                                </div>

                                                <div className="col ">
                                                <label htmlFor='profession' className='label-control'>Profession: </label><br />
                                                <input id="profession" type="text" className="input-control" name="profession" onChange={(e)=>inputChangeHandlerCrew(e,index)} value={movie.crew[`${index}`].profession}></input>
                                                </div>
                                            
                                        </div>
                                )}
                                
                                <div className='col '>
                                
                                <div className="btn-group-sm" role="group" aria-label="Basic example">
                                <button className=' btn btn-secondary ' name="increase" onClick={changeCrew}>
                                    +
                                    </button>
                                    <button className=' btn btn-warning ' name="decrease" onClick={changeCrew}>
                                    -
                                    </button>
                                </div>
                            

                          </div>
                          <div className='col'>
                          <DatePicker  selected={startDate}
                           dateFormat="yyyy/MM/dd"
                          onChange={(date)=>handleDate(date)} />
                          </div>
                          

                            </div>

                    
                    <div className="row  mt-3 ms-auto ">
                                        <div className="col text-start">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                        <button className=' btn btn-secondary btn-sm' onClick={(e)=>{e.preventDefault();setMovie(initialscreen); setmovieUpdate(false)}}>cancel</button>
                                                {movieUpdate? <span onClick={updatechange}
                                                    className=' btn btn-warning  btn-sm'>update</span>: <button type="submit" className=' btn btn-success btn-sm'>Add</button>} 
                                        </div>
                        
                                        
                              
                                </div>
                    </div>
                        </div>
                 </div>
            </form>
 </div>
          
 </div>
    </div>
   
    </> );
}

export default MovieSetting;