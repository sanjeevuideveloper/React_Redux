
import {login,logout} from './actions/LoginActions';

import {useStore, useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import "./authentication/styles.css";
function Member(){
	let  login1=useSelector(state=>state.login)
	let  dispatch= useDispatch();
  let history= useHistory();

 const logout1=()=>{
 	dispatch(logout());
    

    history.push('/');

 }
	return(
		<div className="auth">
		    <h1>Member Component</h1>
		    Username is {JSON.parse(localStorage.getItem('userOb')).username}<br/>
		    Password is {JSON.parse(localStorage.getItem('userOb')).password}<br/>
		    Email is {JSON.parse(localStorage.getItem('userOb')).email}<br/>
		    { login1 &&
        <button onClick={logout1}>Logout</button>
        	}
        	{!login1 &&
        		<p>Please login, You are logged out now!!</p>
        	}
    </div>
		)
}

export default Member;