import {addTodo as addTodoAction ,deleteTodo as deleteTodoAction} from '../actions/TodoActions';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {useDispatch} from 'react-redux';
function TodoContainer(){
 const dispatch=useDispatch();
 const addTodo=(e)=>{
 	e.preventDefault();
 	let todo=e.target.todo.value;
    dispatch(addTodoAction(todo));
    e.target.todo.value=null;

 }
 const deleteTodo=(id)=>{
    dispatch(deleteTodoAction(id))
 }

 return(
 	<div>
 	   <h1>Todo List</h1>
 		<TodoList delete={deleteTodo}></TodoList>
 		<TodoForm addTodo={addTodo}></TodoForm>
 	</div>
 	)
}
export default TodoContainer;