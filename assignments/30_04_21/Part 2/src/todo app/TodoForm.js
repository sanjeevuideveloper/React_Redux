import {Component} from 'react';

class TodoForm extends Component{
	constructor(props){
		super(props);
	}
	render(){
        return  <div>
         <form onSubmit={this.props.addTodo}>
 		   <input type="text"  name="todo"/>
 			<button>add Todo</button>
 		</form>
          </div>
      }
		
}

export default TodoForm;