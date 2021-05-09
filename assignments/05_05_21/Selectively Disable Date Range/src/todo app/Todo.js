import {Component} from 'react';
class Todo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
        <span>{this.props.todo.title}</span>
		)

		}
}
export default Todo;