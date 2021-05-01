let initialState={
    todos:
    [
        { id:1,title: "Learn about React" },
        { id:2,title: "Meet friend for lunch" },
        { id:3,title: "Build really cool todo app" }
  ],
  
};
function TodoReducer(state=initialState, action){
	switch(action.type){
    	case 'todo/add':
    		console.log('came in action todo/add');
    		let xx={
                todos:[...state.todos, {id:state.todos.length+1,title:action.value}],
                
         };
            console.log('after todo/add state is ',xx);
    		return xx;

        

        case 'todo/delete':
            console.log('came in action todo/delete');
            let xx1=[...state.todos]
             xx1=xx1.filter(item=>item.id != action.id);
             xx1={todos:xx1};
            console.log('after todo/delete state is ',xx1);
            return xx1; 

        default :
    	     return state;

    }
}
export default TodoReducer;