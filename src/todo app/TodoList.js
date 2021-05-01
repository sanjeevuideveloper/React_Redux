import {Component} from 'react';
import { IsEmpty, Map } from "react-lodash"
import Todo from './Todo';

class TodoList extends Component{
	constructor(props){
		console.log(props);
		super(props);
	}
	EmptyList =()=>{
		return "Empty List"
	}
	render(){
		return(
        <div>
        <IsEmpty
      		value={this.props.todos}
      		yes={this.EmptyList}
     		no={() => (
        		<ul>
          			<Map collection={this.props.todos} iteratee={i => <li key={i.id}>{i.title}<button onClick={()=>this.props.delete(i.id)}>Delete</button></li>} />
        		</ul>
     			 )}
   		/>
        
        </div>
		)
	}
	
	
}

export default TodoList;