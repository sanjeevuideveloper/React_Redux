import axios from 'axios';
import { useForm,reset } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { ErrorMessage } from '@hookform/error-message';
import "./styles.css";
function Register(){

	const {
    register,
    handleSubmit,reset ,
    formState: { errors }, watch
  } = useForm();
  const password = watch("password");
  	const history= useHistory();
	const doRegister=(data, e)=>{
		e.preventDefault();
	
		let userOb={username:e.target.username.value, email:e.target.email.value, password:e.target.password.value}
		axios.post('/users/register', userOb).then(res=>{
			alert(res.data.message);
			reset({})
			history.push('/login');

		}).catch(err=>{
			console.log(err);
			alert('something went wrong')
		})
	}

	return(
		<div className="auth">
		<h1>Register</h1>
		<form onSubmit={handleSubmit(doRegister)}>
      		<input type="text" placeholder="username" {...register('username',{ required: {
  						value:true,
  						message:'username is required' }  
  					})} /> {/* register an input */}
      		 <ErrorMessage errors={errors} name="username" as="p" />
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
      		<input
        		placeholder="confirm password"
        		type="password"
        		 {...register("confirmpassword",{
        		 	validate: value => 
        		 	{
        		 		console.log(value, password)
        		 	return value === password || 'password do not match' 
        		 }
  					})} />
      		<ErrorMessage errors={errors} name="confirmpassword" as="p" />
      		
      		
      		<input type="submit" />
    	</form>

       </div>
		)
}

export default Register;