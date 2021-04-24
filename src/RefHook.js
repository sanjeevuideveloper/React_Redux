import {useRef} from 'react';
function RefHook(){
	const inputRef=useRef(null);
	const inputAgeRef=useRef(null);
	const getInputVal=()=>{
		console.log(inputRef.current);
		alert(inputRef.current.value);
		alert(inputAgeRef.current.value)
	}
	return(
       <div>
       	<input ref={inputRef} name="name" type="text"/>
       	<input ref={inputAgeRef} name="age" type="number"/>
       	<button onClick={getInputVal}>Click Me</button>

       </div>
		)
}

export default RefHook;