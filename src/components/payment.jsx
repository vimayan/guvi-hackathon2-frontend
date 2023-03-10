import React from 'react';
import Navbar from "./navbar";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SeatSelected } from '../action/showAction';
import axios from 'axios';
function Payment() {

    const bookmyshow = useSelector((states)=>states.bookmyshow);
    const jwtToken = localStorage.getItem('token')
    
    const user = localStorage.getItem('admin')==="true"?"admin":"user"

      
    const {selectedShow,selectedScreen,userSelected} =bookmyshow;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleCancel=()=>{
        navigate("/home");
        dispatch(SeatSelected([]))
    }
    const handlePayment=()=>{

        axios.post(`/payment/${user}`,{"id":selectedScreen._id,"userSelected":userSelected},
        {headers: {
          'token': jwtToken
        }},
        ).then((response)=>{
           
            alert("Booked");
            setTimeout(()=>{
                navigate("/home");
            },1000);

        }).catch(err=>{alert("error in booking");
        setTimeout(()=>{
            navigate("/home");
        },1000);
    })

      

       
    }


    return ( <>
    <Navbar/>
    <div className='container-fluid mt-5 '>
    <div className='row justify-content-center gap-5  '>
    <div className='col-lg-3 col-md-4 col-sm-6 px-0 shadow-lg bg-white mx-auto rounded rounded-2'>
    <h3 className='bg-success text-white rounded-top p-2 '>TICKET </h3>
    <img src="https://images.pexels.com/photos/3658809/pexels-photo-3658809.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." className='img-fluid col-11 rounded-2' />
    <div className='d-flex  flex-column p-3 text-start'>
        <span className='fs-5 px-2'>
        <strong> {selectedShow.name} </strong>|<i> {selectedShow.launguage} </i> | {selectedShow.certified}
        </span>
        <span className='fs-5 5 px-2'>
        {selectedScreen.name}| {selectedScreen.address[0].place}
        </span>
        <span className='px-2 d-flex'>
       <p className='fs-5 me-2'> Seats:</p> {userSelected.map((seat)=><p key={seat} className='me-1 mt-1 align-self-center'>{seat}</p>)}
        </span>
       
    </div>
    </div>
    <div className='col-lg-3 col-md-4 col-sm-6 py-3 me-md-5 align-self-end' style={{backgroundColor:"aliceblue"}}>
        <p className='text-start fs-5 ms-3 mt-2'>  Order Summary</p>
        <div className='row my-1'>
        <div className=' col d-flex ms-3 gap-4'  >
        <p>Tickets</p> X <b>{userSelected.length} </b>
        </div>
        <div className='col'>
        {(userSelected.length)*100}
        </div>
        </div>


        <div className='row mb-3'>
        <div className=' col d-flex ms-3 gap-4'  >
        <p>CGST+SCGST</p>
        </div>
        <div className='col'>
        {(userSelected.length)*100*.12}
        </div>

        </div>
        <div className='row mb-3'>
        <div className=' col d-flex ms-3 gap-4'  >
        <p>Total</p>
        </div>
        <div className='col'>
        {(userSelected.length)*100*.12+((userSelected.length)*100)}
        </div>
<hr />
        </div>
        <div className='row'>
        <img src="https://cdn2.vectorstock.com/i/thumbs/64/46/managing-business-finances-pixel-perfect-rgb-vector-42936446.jpg" alt="..." className='col-3'/>
        <img src="https://cdn.vectorstock.com/i/preview-1x/52/25/credit-or-debit-card-with-chip-and-contactless-pay-vector-27805225.webp" alt="..."  className='col-3' />
        <img src="https://cdn.vectorstock.com/i/preview-1x/72/60/smartphone-with-credit-card-sign-glowing-neon-icon-vector-29537260.webp" alt="..." className='col-3'/>
        <img src="https://cdn.vectorstock.com/i/preview-1x/68/93/wallet-with-cash-money-and-credit-cards-isolated-vector-43896893.webp" alt="..." className='col-3' />
        </div>

<hr />
        
        <div className='d-flex justify-content-between p-0'>
        <button className='   col-5 text-dark bg-secondary py-1 curser-pointer  ' onClick={handleCancel} > cancel</button>

        <button className='  col-5 text-dark bg-warning  py-1 curser-pointer ' onClick={handlePayment}> PAY</button>

        </div>
   
    </div>
    </div>
 
  
</div>

    </> );
}

export default Payment;