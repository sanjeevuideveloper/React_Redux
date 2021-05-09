
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import {Component} from 'react';
const _ = require("lodash");
class  TodoContainer extends Component{
  state={
    todos:[]
  }
   constructor(props){
   	console.log(props);
   	super(props);

   	this.addTodo=this.addTodo.bind(this);
	  this.deleteTodo=this.deleteTodo.bind(this);
    

   }
   componentWillMount(){

    let temp={todos:JSON.parse(localStorage.getItem('todos'))};
    if(temp.todos.length > 0){
      this.setState(temp);
      console.log(this.state);
    }
   }
 addTodo=(e)=>{
 	e.preventDefault();
 	let title=e.target.todo.value;
  let localstorage= JSON.parse(localStorage.getItem('todos'));
    let temp={id:this.state.todos+1,title:title};
    if(localstorage && (localstorage.length > 0) ){
      localstorage.push(temp);
    }
    else{
      localstorage=[];
      localstorage.push(temp);
    }
    
    localStorage.setItem('todos',JSON.stringify(localstorage))
    this.setState({todos:[...this.state.todos, temp]});
    e.target.todo.value=null;

 }
 deleteTodo=(id)=>{
   let localstorage= JSON.parse(localStorage.getItem('todos'));
   let newArray = _.filter(localstorage, (e) => e.id !== id);
   if(newArray.length == 0){
     localStorage.removeItem('todos')
   }
   else{
    localStorage.setItem('todos',JSON.stringify(newArray))
   }
    
    this.setState({todos:newArray});

 }

 render(){
 	return (<div>
 	   <h1>Todo List</h1>
 		<TodoList todos={this.state.todos} delete={this.deleteTodo}></TodoList>
 		<TodoForm addTodo={this.addTodo}></TodoForm>
 	</div>)
 	}
}

export default TodoContainer;