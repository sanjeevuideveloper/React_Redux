let initialState={count:0};
function CountReducer(state=initialState, action){
	console.log('current action',action);
	console.log('current state',state);

    switch(action.type){
    	case 'counter/increase':
    		console.log('came in action counter/increase');
    		let xx={...state, count:state.count+1}
    		console.log('increase', xx);
    		return xx;
    	case 'counter/decrease':
    		console.log('came in action counter/decrease');
            let xx1={...state, count:state.count-1}
            console.log('decrease', xx1);
    		return xx1;
        case 'counter/reset':
            console.log('came in action counter/reset');
            let xx2={...state, count:0}
            console.log('reset', xx2);
            return xx2;
    	default :
    	    return state;

    }
}
export default CountReducer;