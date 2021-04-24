import {useState, useEffect} from 'react';
 function HookUseEffectExample(){
 	console.log("component ran");
 	const [no, setNo]=useState(0);
 	const [title, setTitle]=useState("initial title");
 	useEffect(()=>{
 		console.log("i run only when component is loaded first time");
 		setNo(4);

 	},[]);
 	useEffect(()=>{
 		console.log("title changed , new Current Tile is ",title);
 		

 	},[title]);

 	const increase=()=>{
 		setNo(no+1);
 	}
 	const changeTitle=(e)=>{
 		e.preventDefault();
 		setTitle(e.target.title.value);

 	}
 	return (
 		<div>
 		<h1>{title}</h1>
 			<form onSubmit={changeTitle}>
 			<input type="text" name="title"/>
 			<button>changeTitle</button>
 			</form>

 			no = {no}<br/>
 			<button onClick={increase}>increase</button>

 		</div>
 		)
 }
export default HookUseEffectExample; 