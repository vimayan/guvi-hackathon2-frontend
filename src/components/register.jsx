import React from 'react';
import './component.css';
import * as yup from "yup";
import axios from "axios";
import RegisterBanner from "../data/banner.jpg"
import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import { useNavigate } from "react-router-dom";





function Login() {

const navigate = useNavigate();
   

    const loginformdata =useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            age:'',
        },
        validationSchema:yup.object({
            username:yup.string().required('Email is required').max(16),
            email:yup.string().required('Email is required').email(),
            password:yup.string().required('Email is required').min(6,'enter minimum 6 char').required('password is required'),
            age:yup.number().min(18).max(100).required()
        }),
        onSubmit:(userdata)=>{
            
            axios.post("http://localhost:5000/register",userdata).then(
                (response)=>{
                        console.log(response);
                    
                       
                      
                }
            ).catch(err=>console.log(err))

         navigate('/')
 
            
         
        }
        
    })
   



    return (  <>
     <div className="container-fluid bg-primary register_page p-5" >

<div className="row justify-content-center fw-light p-5">

    <div className="col-xl-6 col-lg-8 col-md-9  m-5 ">

        <div className="card  border-0 shadow-lg ">
            <div className="card-body p-0">
               
                <div className="row">
                     <img className='img-fluid col-lg-6 col d-none d-md-block ' src={RegisterBanner} alt="none" />
                    <div className="col-lg-6 col-md p-5 align-self-center d-flex flex-column">
                       
                            <div className="text-center">
                                <h4 className="mb-4">Welcome !</h4>
                            </div>

                      <form className="user" onSubmit={loginformdata.handleSubmit}>
                            <div className="form-group d-flex">
                                    <input type="text" className=" form-control form-control-user rounded-5 p-2 my-2 text-center"
                                        placeholder="Enter Username..."  name='username' value={loginformdata.values.username} onChange={loginformdata.handleChange}/>

                                        {loginformdata.errors.name?<div  className='text-danger'>{loginformdata.errors.name}</div>:<></>}
                                       
                                </div>
                                <div className="form-group" >
                                    <input type="email" className="form-control form-control-user rounded-5 p-2 mb-3 text-center"
                                    placeholder="Enter Email Address..." name='email'  value={loginformdata.values.email} onChange={loginformdata.handleChange}/>
                                        
                                         {loginformdata.errors.email?<div  className='text-danger'>{loginformdata.errors.email}</div>:<></>}
                                </div>
                                <div className="form-group d-flex ">
                                    
                                    <input type="password" className=" form-control form-control-user rounded-5 p-2 my-2 text-center  "
                                        id="password" placeholder="Password"  name='password'  value={loginformdata.values.password} onChange={loginformdata.handleChange}/>
                                        
                                     <input type="text" className=" form-control form-control-user rounded-5 p-2 my-2 text-center w-25 "
                                        placeholder="age" id='age'   value={loginformdata.values.age} onChange={loginformdata.handleChange}/>

                               
                                </div>
                                
                                {loginformdata.errors.password?<div  className='text-danger'>{loginformdata.errors.password}</div>:<></>}
                                        {loginformdata.errors.age?<div  className='text-danger'>{loginformdata.errors.age}</div>:<></>}
                              
                                        <button className=" btn  btn-danger rounded-pill my-3 w-75 mx-auto "  type='submit'>
                                    <i className="fab fa-google fa-fw"></i> register</button>        
                                
                        
                    </form>
                          
                            <div className="text-center">
                                <Link  to='/#' className="small text-decoration-none" href="register.html">login an Existing Account!</Link>
                            </div>
                              
                            <div className="text-center">
                                <Link to='/#' className="small text-decoration-none" >Forgot Password?</Link>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
    </>);
}

export default Login;