import {useSelector} from 'react-redux';
import Todo from './Todo'
function TodoList(props){
	const todos=useSelector(state=>state.todos);
	return(
        <div>
        { 
          todos.map(item=><div><Todo todo={item}></Todo> <button onClick={()=>props.delete(item.id)}>Delete</button></div>)
        }
        </div>
		)
}
export default TodoList;