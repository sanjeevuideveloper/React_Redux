import {useState,useMemo} from 'react';
const WithUseMemo=()=>{
	const [increment ,setIncrement]=useState(0);
	const [initialValue,setInitialValue]=useState(1);
	const complexCalulation=(mul=1)=>{
		
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
	const increaseInitialvalue=()=>{
		setInitialValue(initialValue+1);
	}
	const optimizedComplexCalculation=useMemo(()=>complexCalulation(initialValue),[initialValue])
	return(
		<div>
		<button onClick={increase}>increase</button>
		<div>{increment}</div>
		<button onClick={increaseInitialvalue}>increase initial value</button>
		<div>initial value={initialValue}</div>
		<p>value={optimizedComplexCalculation}</p>
		</div>
		)	
}
export default WithUseMemo;