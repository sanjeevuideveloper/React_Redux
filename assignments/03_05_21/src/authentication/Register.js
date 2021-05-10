
import { useForm,reset } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { ErrorMessage } from '@hookform/error-message';
import "./styles.css";
function Register(){

	const {
    register,
    handleSubmit,reset ,
    formState: { errors }
  } = useForm();
   
  	const history= useHistory();
	   const doRegister=(data,e)=>{
		e.preventDefault();
	     
		let userOb={username:e.target.username.value, email:e.target.email.value, password:e.target.password.value}
       localStorage.setItem("userOb",JSON.stringify(userOb));
		  reset({})
      history.push('/login');
	}

	return(
		<div className="auth">
		<h1>Register</h1>
		<form onSubmit={handleSubmit(doRegister)}>
      		<input type="text" placeholder="username" {...register('username',{ required:{
            value:true,
            message:"username is required"
          } 
  					})} /> {/* register an input */}
      		 <ErrorMessage errors={errors} name="username" as="p" />

           <input type="email" placeholder="email" {...register("email", {required:{
              value:true,
              message:'email is required' }  
            })} /> {/* register an input */}
           <ErrorMessage errors={errors} name="email" as="p" />
          <input type="password" placeholder="password"  {...register("password", {required:  {
              value:true,
              message:'password is required' 
            },
             
              pattern: {
                  value:/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:"password should include atleast one capital and one special and minimum 6 character is required "
              }   
            })} />
          <ErrorMessage errors={errors} name="password" as="p" />
      	<input type="submit" />
    	</form>

       </div>
		)
}

export default Register;