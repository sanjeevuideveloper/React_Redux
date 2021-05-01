import {useStore, useDispatch, useSelector} from 'react-redux';
function ReduxCounter(){
	const dispatch = useDispatch();
	const store=useStore();
	const count=useSelector(state=>state.count);
	console.log('inside ReduxCounter', count);
	const increase=()=>{
		dispatch({type:"counter/increase"});
	}
	const decrease=()=>{
		dispatch({type:"counter/decrease"});
	}
	const reset=()=>{
		dispatch({type:"counter/reset"});
	}
	return(
      <div>
      	<h1>Redux Counter</h1>
      	count={count}<br/>
      	<button onClick={increase}>increase</button>
      	<button onClick={decrease}>decrease</button>
      	<button onClick={reset}>reset</button>
      </div>
		)
}

export default ReduxCounter;