import {addTodo as addTodoAction ,deleteTodo as deleteTodoAction} from '../actions/TodoActions';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {connect} from 'react-redux';
import {Component} from 'react';
class  TodoContainer extends Component{
   constructor(props){
   	console.log(props);
   	super(props);
   	this.addTodo=this.addTodo.bind(this);
	this.deleteTodo=this.deleteTodo.bind(this);
   }
 addTodo=(e)=>{
 	e.preventDefault();
 	let todo=e.target.todo.value;
    this.props.addTodo(todo);
    e.target.todo.value=null;

 }
 deleteTodo=(id)=>{
   this.props.deleteTodo(id);
 }

 render(){
 	return (<div>
 	   <h1>Todo List</h1>
 		<TodoList todos={this.props.todos} delete={this.deleteTodo}></TodoList>
 		<TodoForm addTodo={this.addTodo}></TodoForm>
 	</div>)
 	}
}
const mapStateToProps=(state)=>{
	return {todos:state.todos};
}
const mapDispatchToProps= (dispatch)=>{
	return {
		addTodo:(todo)=>dispatch(addTodoAction(todo)),
		deleteTodo:(id)=>dispatch(deleteTodoAction(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);