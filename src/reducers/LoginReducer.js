let initialState={
    login:false
};
function TodoReducer(state=initialState, action){
	switch(action.type){
    	case 'login':
    		console.log('came in action login');
    		
    	   return{...state, login:true}
      case 'logout':
        console.log('came in action login');
        
         return{...state, login:false}    
    	default :
    	     return state;

    }
}
export default TodoReducer;