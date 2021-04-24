import {showDate,showMood, name as importedName, studentOb} from './helpers';

function Login(){
	let name="Zenrays";
	let age=6;
	function doLogin(){
		alert(importedName);
		studentOb.sayLocation();
      alert("wow... U tried Login in?");
	}
	return(
		
	<div className="myLogin">
	
	<div> this is a {name} and age is {age}</div>
	<h2>Welcome to first login page</h2>
	<input type="text" placeholder="enter username"/>
	<input type="password" placeholder="enter password"/>
	<button onClick = {doLogin} >click</button>

	</div>
	);
}
export default Login;