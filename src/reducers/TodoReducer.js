let initialState={
    todos:
    [
        { id:1,title: "Learn about React" },
        { id:2,title: "Meet friend for lunch" },
        { id:3,title: "Build really cool todo app" }
  ],
  forums:[
  {id:1,topic:"ReactJs",user:'Sanjeev Kumar',postingDate:new Date()},
  {id:2,topic:"NodeJs",user:'Sanjeev Kumar',postingDate:new Date()}
  ],
  count:0
};
function TodoReducer(state=initialState, action){
	switch(action.type){
    	case 'todo/add':
    		console.log('came in action todo/add');
    		let xx={
                todos:[...state.todos, {id:state.todos.length+1,title:action.value}],
                forums:[...state.forums],
                count:state.count
         };
            console.log('after todo/add state is ',xx);
    		return xx;

        case 'forum/add':
            console.log('came in action forum/add');
            let fxx={
                forums:[...state.forums, {id:state.forums.length+1,topic:action.topic, user:action.user,postingDate:new Date()}],
                todos:[...state.todos],
                 count:state.count
            };
            console.log('after forum/add state is ',fxx);
            return fxx; 

        case 'todo/delete':
            console.log('came in action todo/delete');
            let xx1=[...state.todos]
             xx1=xx1.filter(item=>item.id != action.id);
             xx1={todos:xx1, forums:[...state.forums], count:state.count};
            console.log('after todo/delete state is ',xx1);
            return xx1; 

        case 'forum/delete':
            console.log('came in action forum/delete');
            let fxx2=[...state.forums]
             fxx2=fxx2.filter(item=>item.id != action.id);
             fxx2={forums:fxx2, todos:[...state.todos],count:state.count};
            console.log('after forum/delete state is ',fxx2);
            return fxx2;         
        case 'forum/deleteFiveMinBeforeTopic':
              console.log('came in action forum/deleteFiveMinBeforeTopic');
              let temp=[...state.forums];
               temp=temp.filter(forum=>{
                      let postingTime=forum.postingDate;
                      let currentTime=new Date();
                      let time=Math.floor(Math.abs(currentTime-postingTime)/(1000*60));
                      console.log('postingTime',postingTime);
                      console.log('currentTime',currentTime);
                      console.log('time',time);
                      if(time >= 5){
                        return false;
                      }
                      else{
                        return true;
                      }
                      
                    });
                    temp={todos:[...state.todos], forums:temp,count:state.count};
    	         return temp;
          case 'counter/increase' :
                     return {todos:[...state.todos], forums:[...state.forums], count:state.count+1};
          case 'counter/decrease' :
                     return {todos:[...state.todos], forums:[...state.forums], count:state.count-1};                
          case 'counter/reset' :
                     return {todos:[...state.todos], forums:[...state.forums], count:0};           
    	   default :
    	     return state;

    }
}
export default TodoReducer;