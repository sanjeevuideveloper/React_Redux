
import { useHistory } from "react-router-dom";
import "./authentication/styles.css";
import jwt_decode from "jwt-decode";
import {useState,useEffect} from 'react';
import Member from './Member';
function Profile(){
	const history=useHistory();
  const[userDetails, setUserDetails]=useState({id:null,email:null})
	useEffect(()=>{
		if(!localStorage.getItem('token')){
			alert('you are not logged in');
			history.push('/login');
		}
		else{
			const decoded=jwt_decode(localStorage.getItem('token'))
		if(decoded.user.email && decoded.user.id)
		setUserDetails({id:decoded.user.id,email:decoded.user.email})
		}
	
},[])

	return(
		<div className="auth">
		    <h1>Profile Component</h1>
		    <div>Email is {userDetails.email}</div>
		    <div>User Id is {userDetails.id}</div>
		    <Member/>	
        
    </div>
		)
}

export default Profile;