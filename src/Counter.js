import {useState} from 'react';
function Counter(){
	let count= 0;
      
	let [stateVariable, setstateVariable]=useState(0);
      let [title, setTitle]=useState("Initial Title");
      
	const increase=()=>{
      count=count+1;

	}
	const decrease=()=>{
      count=count-1;
      
	}
	const showCount=()=>{
		alert(count);
	}
	const increaseStateCount=()=>{
		setstateVariable(stateVariable+1);
	}
      const decreaseStateCount=()=>{
            setstateVariable(stateVariable-1);
      }
	 const changeTitle=(event)=>{
     event.preventDefault();
     const inputTag=event.target.title;
    setTitle(inputTag.value);
	}
	return(
             <div>
                  <h2>{title}</h2>
             	the count is {count}<br/>
             	the dynamic count is {stateVariable}<br/>
             	<button onClick={increase}>increase</button>
             	<button onClick={decrease}>decrease</button>
             	<button onClick={showCount}>showCount</button>
             	<button onClick={increaseStateCount}>increaseStateCount</button>
                  <button onClick={decreaseStateCount}>decreaseStateCount</button>
             	<form onSubmit={changeTitle}>
             	<input type="text" name="title" placeholder="Enter new title"/>
             	 <button>changeTitle</button> 
             	</form>
             </div>
		);
}

export default Counter;