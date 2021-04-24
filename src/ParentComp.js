import {useState} from 'react';
import React from 'react';
const ParentComp=()=>{
	console.log("Parent component loaded");
	const [no ,setNo]=useState(0);
	const increase=()=>{
	setNo(no+1);
	}
	return(
		<div>
		<h2>I am a parent component</h2>
		The state variable is {no}<br/>
		<button onClick={increase}>Increase Number</button>
		<ModifiedChildComp/>
		</div>
		)	
}

function ChildComp(){
	console.log("Child component loaded");
	return(
		<div>
		<h2>I am a child component</h2>	
		</div>
		)
}
const ModifiedChildComp=React.memo(ChildComp);
export default ParentComp;