import {useState} from 'react';
const MemoTest=()=>{
	const [increment ,setIncrement]=useState(0);
	const complexCalulation=()=>{
		let mul=1;
       console.log(`Initial sum value is ${mul}`);
       for(let i=1;i<4;i++){
       	mul=mul*i;
       	console.log('ran loop inside complexCalculation function');

       }
       console.log('mul calculated again =',mul);
       return mul;
	};
	const increase=()=>{
	setIncrement(increment+1);
	};
	return(
		<div>
		<button onClick={increase}>increase</button>
		<div>{increment}</div>
		<p>{complexCalulation()}</p>
		</div>
		)	
}
export default MemoTest;