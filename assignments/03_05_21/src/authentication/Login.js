import axios from 'axios';
import { useForm,reset } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import {login,logout} from '../actions/LoginActions';
import { ErrorMessage } from '@hookform/error-message';
import {useStore, useDispatch, useSelector} from 'react-redux';
import "./styles.css";
function Login(){
 const dispatch=useDispatch();
 

	const {
    register,
    handleSubmit,reset ,
    formState: { errors }, watch
  } = useForm();
  const password = watch("password");
  	const history= useHistory();
	const doLogin=(data,e)=>{
		e.preventDefault();
		console.log(data);
    const userOb=JSON.parse(localStorage.getItem('userOb'));
      if(userOb && (data.username == userOb.username) && (data.password == userOb.password)){
        dispatch(login());
        reset({});
        history.push('/member');
      }
      else{
        alert('username or password does not match');
      }
     
		
	}

	return(
		<div className="auth">
		<h1>Login</h1>
     
		<form onSubmit={handleSubmit(doLogin)}>
      		
      		<input type="text" placeholder="email" {...register("username", {required:{
  						value:true,
  						message:'username is required' } ,
              pattern: {
                  value:/^(?=.*\d)(?=.*[^@$!%*?&])[A-Za-z\d]{5,}$/,
                  message:"username should not  include special and minimum 5 character is required "
              }  
  					})} /> {/* register an input */}
      		 <ErrorMessage errors={errors} name="username" as="p" />
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