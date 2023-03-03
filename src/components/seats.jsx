import React from 'react';

const seats = [1,2,3,4,5,6,7,8,9,10,11,12]
const rows1 = ['A','B','C','D'];
const rows2 = ["E","F","G","H"];
const rows3=["I","J","k","L"]
const reserved = [];
const booked = []

function Seats() {
    return ( <>
    <div className='mx-4 fw-bold mt-4'>

<div className='d-flex flex-row gap-3 gap-sm-5 flex-nowrap  mb-2'>
    <div >
    {rows3.reverse().map((row_name,index)=>
            <div key={index} className=' d-flex flex-row flex-nowrap '>
               <span className='badge rounded-pill'>

               </span>
               {seats.map((seat_no,index)=>
                    <div key={seat_no} >
                    <input type='checkbox'  className="btn-check " name="seat" id="btnradio1" autocomplete="off" />
                     <label htmlFor="seat">
                     <i className="fa-solid fa-couch m-1"/>
                    </label>
                    </div>
                    
                )}
                <span className='ms-3'>

                </span>
            </div>
            
        )}
    </div>
    <div >
    {rows3.map((row_name,index)=>
    
            <div key={index} className=' d-flex flex-row flex-nowrap'>
              
               {seats.map((seat_no,index)=>
                    <div key={seat_no} >
                    <input type='checkbox'  className="btn-check " name="seat" id="btnradio1" autocomplete="off" />
                     <label htmlFor="seat">
                     <i className="fa-solid fa-couch m-1"/>
                    </label>
                    </div>
                    
                )}
                <span className='ms-3'>
                {row_name}

                </span>
                 
            </div>
        )}
    </div>
   <div>
    <span className='badge rounded-pill bg-warning'>prcie:150</span>
   </div>
       
    </div>


    <div className='d-flex flex-row gap-3 gap-sm-5 flex-nowrap  mb-5'>
    <div >
    {rows2.map((row_name,index)=>
            <div key={index} className=' d-flex flex-row flex-nowrap'>
               <span className='badge rounded-pill'>

               </span>
               {seats.map((seat_no,index)=>
                    <div key={seat_no} >
                    <input type='checkbox'  className="btn-check " name="seat" id="btnradio1" autocomplete="off" />
                     <label htmlFor="seat">
                     <i className="fa-solid fa-couch m-1"/>
                    </label>
                    </div>
                    
                )}
                <span className='ms-3'>

                </span>
            </div>
            
        )}
    </div>
    <div >
    {rows2.reverse().map((row_name,index)=>
    
            <div key={index} className=' d-flex flex-row flex-nowrap'>
              
               {seats.map((seat_no,index)=>
                    <div key={seat_no} >
                    <input type='checkbox'  className="btn-check " name="seat" id="btnradio1" autocomplete="off" />
                     <label htmlFor="seat">
                     <i className="fa-solid fa-couch m-1"/>
                    </label>
                    </div>
                    
                )}
                <span className='ms-3'>
                {row_name}

                </span>
                 
            </div>
        )}
    </div>
   <div>
    <span className='badge rounded-pill bg-warning'>prcie:150</span>
   </div>
       
    </div>


    <div className='d-flex flex-row gap-3 gap-sm-5 flex-nowrap  mb-5'>
    <div >
    {rows1.map((row_name,index)=>
            <div key={index} className=' d-flex flex-row flex-nowrap'>
               <span className='badge rounded-pill'>

               </span>
               {seats.map((seat_no,index)=>
                    <div key={seat_no} >
                    <input type='checkbox'  className="btn-check " name="seat" id="btnradio1" autocomplete="off" />
                     <label htmlFor="seat">
                     <i className="fa-solid fa-couch m-1"/>
                    </label>
                    </div>
                    
                )}
                <span className='ms-3'>

                </span>
            </div>
            
        )}
    </div>
    <div >
    {rows1.reverse().map((row_name,index)=>
    
            <div key={index} className=' d-flex flex-row flex-nowrap'>
              
               {seats.map((seat_no,index)=>
                    <div key={seat_no} >
                    <input type='checkbox'  className="btn-check " name="seat" id="btnradio1" autocomplete="off" />
                     <label htmlFor="seat">
                     <i className="fa-solid fa-couch m-1"/>
                    </label>
                    </div>
                    
                )}
                <span className='ms-3 '>
                {row_name}

                </span>
                 
            </div>
        )}
    </div>
   <div>
    <span className='badge rounded-pill bg-warning'>prcie:50</span>
   </div>
       
    </div>
     
    <div style={{width:"750px"}}>
    <hr />
        screen here
        <hr />
        <div>
    <span>
    AVAILABLE:<i class="fa-solid fa-couch text-success ms-2 me-4"/>
    WAITNG:<i class="fa-solid fa-couch text-warning ms-2 me-4"/>
    BOOKED:<i class="fa-solid fa-couch text-danger ms-2 me-4"/>
    </span>
</div>
       
    </div>

    </div>
    </> );
}

export default Seats;