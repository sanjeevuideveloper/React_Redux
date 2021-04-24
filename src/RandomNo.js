import {useState} from 'react';
function RandomNo(){
	const [randomNo, setRandomNo]=useState(0);
	const [randomArr, setRandomArr]=useState([]);
	const generateRandomNo =()=>{
		let no = Math.floor(Math.random()*10);
		 setRandomNo(no); //this is asynchronous
		 alert(randomNo);
		let newRandomArr=randomArr.concat(no);
		setRandomArr(newRandomArr);
	}
	const calculateSum =()=>{
		let sum = randomArr.reduce(function(accumulator, currentValue){
			return accumulator+currentValue;
		})
		alert(sum);
	}

	return(
      <div>
      	<div>The random number u generated is {randomNo}</div>
      	<button onClick={generateRandomNo}>Generate Random No</button>
      	<ul>
      	{
      	randomArr.map(function(value){
      		return (
      			<li>{value}</li>
      			)
      	})
      }
      	</ul>
      	<button onClick={calculateSum}>Sum</button>
      </div>
	)
}

export default RandomNo;