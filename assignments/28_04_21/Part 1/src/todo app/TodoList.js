import {Component} from 'react';

import Todo from './Todo';

class TodoList extends Component{
	constructor(props){
		console.log(props);
		super(props);
	}
	render(){
		return(
        <div>
        { 
          this.props.todos.map(item=><div><Todo todo={item}></Todo> <button onClick={()=>this.props.delete(item.id)}>Delete</button></div>)
        }
        </div>
		)
	}
	
	
}

export default TodoList;