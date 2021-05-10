import axios from 'axios';
import { useForm,reset } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useState} from 'react';
import { ErrorMessage } from '@hookform/error-message';
import "./styles.css";
function Login(){
 const[userDetails, setUserDetails]=useState({id:null,email:null})
	const {
    register,
    handleSubmit,reset ,
    formState: { errors }, watch
  } = useForm();
  const password = watch("password");
  	const history= useHistory();
	const doLogin=(data,e)=>{
		e.preventDefault();
		
		let userOb={email:e.target.email.value, password:e.target.password.value}
		axios.post('/users/login', userOb).then(res=>{

			
      const decoded=jwt_decode(res.data.token);
      
      if(decoded.user.email && decoded.user.id){
        localStorage.setItem('token',res.data.token);
        setUserDetails({id:decoded.user.id,email:decoded.user.email})
        reset({})
        history.push('/member');
      }

		}).catch(err=>{
			console.log(err);
			alert('something went wrong')
		})
	}

	return(
		<div className="auth">
		<h1>Login</h1>
     { userDetails.email && userDetails.id &&
      
         <div>
             <h3>email is {userDetails.email}</h3>
             <h3>id is {userDetails.id}</h3>
          </div>
      }
		<form onSubmit={handleSubmit(doLogin)}>
      		
      		<input type="email" placeholder="email" {...register("email", {required:{
  						value:true,
  						message:'email is required' }  
  					})} /> {/* register an input */}
      		 <ErrorMessage errors={errors} name="email" as="p" />
      		<input type="password" placeholder="password"  {...register("password", {required:  {
  						value:true,
  						message:'password is required' }  
  					})} />
      		<ErrorMessage errors={errors} name="password" as="p" />
      	
      		
      		<input type="submit" />
    	</form>

       </div>
		)
}

export default Login;