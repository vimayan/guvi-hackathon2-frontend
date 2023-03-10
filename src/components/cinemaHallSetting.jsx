import React,{useState,useEffect} from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {GetCinemaHall} from '../action/showAction';
import axios from 'axios';


function CinemaHallSetting() {
    const jwtToken = localStorage.getItem('token');

    
 const initialscreen = {
    name:'',
    screen:{name:'',movie:'',seatBooked:[],
    seatHolded:[],},
    address:[{city:'',place:''}]    
        }
 
    const [screens,setScreens]=useState(initialscreen)
    const [screenFeildUpdate,setScreenFeildUpdate] = useState(false);

 

    const dispatch = useDispatch();
    const bookmyshow = useSelector(state => state.bookmyshow)
    const {cinemaHall} =bookmyshow





         useEffect(()=> {

            axios.get("http://localhost:5000/home/showcinemahall/admin",
            {headers: {
              'token': jwtToken
            }}
            ).then((response)=>{
           
              dispatch(GetCinemaHall(response.data));
          }
            
                 ).catch((err)=>console.log(err))
              
                
            
             },[dispatch,jwtToken])



    useEffect(()=>{

    })


    const editScreen=(screen)=>{
       
        setScreens(screen);
       
        setScreenFeildUpdate(true);
    }
    const removeScreen = (screen)=>{

        axios.delete(`http://localhost:5000/deletecinemahall/admin/${screen._id}`,{headers: {
            'token': jwtToken
          }}).then((response)=>{
         console.log(response);  
            dispatch(GetCinemaHall(response.data));
        }
          
               ).catch((err)=>console.log(err))

        
    }


    const onFormSubmitted=(e)=>{
        e.preventDefault();
     

        axios.post("http://localhost:5000/addcinemahall/admin",screens,{headers: {
            'token': jwtToken
          }}).then((response)=>{
        
            dispatch(GetCinemaHall(response.data));
        }
          
               ).catch((err)=>console.log(err))
            
              

      

    }

const inputChangeHandler=(e)=>{
    const screen = {...screens};
   screen[e.target.name]= e.target.value;
    setScreens(screen)

}

const inputChangeHandlerScreen = (e)=>{
    const screen = {...screens};
    screen.screen[e.target.id]= e.target.value; 
    setScreens(screen)
}

const inputChangeHandlerSeat = (e)=>{
    const screen = {...screens};

    screen.screen[e.target.id]= [...e.target.value.split(",")]; 
 
    setScreens(screen)
}
const inputChangeHandlerAddress = (e)=>{
    const screen = {...screens};
    screen.address[0][e.target.name]= e.target.value; 
    setScreens(screen)
}

const updatechange = ()=>{



axios.put("http://localhost:5000/updatecinemahall/admin",screens,{headers: {
    'token': jwtToken
  }}).then((response)=>{
 
    dispatch(GetCinemaHall(response.data));

}
  
       ).catch((err)=>console.log(err))


    setScreenFeildUpdate(false);
    setScreens(initialscreen);
};



    return ( <>
    <div className='row mt-5'>
            
            <div className='col-12 container'>
                <div className='row'>
                <div className='col-9 col-md-7 ms-0'>
            <div className='container-fluid mt-4' id='Cinemahall'> 

{
    cinemaHall.map((screen,index) =>
  
    <div className='row mt-4 ' key={index}>
        
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
            <div className='col-3 ms-1 d-flex align-self-center gap-1'>
                <button className='btn btn-secondary btn-sm' onClick={()=>{editScreen(screen)}}>
                    edit
                </button>
                <button className='btn btn-secondary btn-sm' onClick={()=>{removeScreen(screen)}}>
                    remove
                </button>
            </div>
        </div>
          
        </div>
          )
        }

        </div>
            </div>
            <div className='col-9 col-md-4'>
            <form className='user-form ' onSubmit={onFormSubmitted}>

<div className='container '>

            <div className="row text-start">
                <div className="col"><label htmlFor='name' className='label-control'>Name: </label><br />
                <input id="username" type="text" className="input-control" name="name" onChange={inputChangeHandler} value={screens.name}></input>
                </div>

                <div className="col"> <label htmlFor='screenName' className='label-control'>screenName: </label><br />
                <input id="name" type="text" className="input-control" name="screenName" onChange={inputChangeHandlerScreen} value={screens.screen.name}></input>
                </div>

                <div className="col">
                <label htmlFor='movie' className='label-control'>Screening-movie </label><br />
                <input id="movie" type="text" className="input-control" name="movie" onChange={inputChangeHandlerScreen} value={screens.screen.movie}></input>
                </div>
                <div className="col">

                <label htmlFor='seatBooked' className='label-control'>seatBooked </label><br />
                <input id="seatBooked" type="text" className="input-control" name="seatBooked" onChange={inputChangeHandlerSeat} value={screens.screen.seatBooked}></input>
                </div>

                <div className="col">
                <label htmlFor='seatHolded' className='label-control'>seatHolded </label><br />
                <input id="seatHolded" type="text" className="input-control" name="seatHolded" onChange={inputChangeHandlerSeat} value={screens.screen.seatHolded}></input>
                </div>

                <div className="col">
                <label htmlFor='city' className='label-control'>City: </label><br />
                <input id="city" type="text" className="input-control" name="city" onChange={inputChangeHandlerAddress} value={screens.address[0].city}></input>
                </div>

                <div className="col">
                <label htmlFor='place' className='label-control'>Place: </label><br />
                <input id="place" type="text" className="input-control" name="place" onChange={inputChangeHandlerAddress} value={screens.address[0].place}></input>
                </div>
            </div>

        
        <div className="row  mt-3 ">
                            <div className="col text-start">

                            <button className=' btn btn-secondary btn-sm me-3' onClick={(e)=>{e.preventDefault();setScreens(initialscreen);}}>cancel</button>
                                    {screenFeildUpdate? <span onClick={updatechange}
                                        className=' btn btn-warning ms-2 btn-sm'>update</span>: <button type="submit" className=' btn btn-success btn-sm'>Add</button>} 
                            </div>
            
            
        </div>
</div>

</form>
            </div>
                </div>

            </div>
           

        </div>
    
    
    </> );
}

export default CinemaHallSetting;