function TodoForm(props){
	return(
          <div>
         <form onSubmit={props.addTodo}>
 		   <input type="text"  name="todo"/>
 			<button>add Todo</button>
 		</form>
          </div>
		)
}

export default TodoForm;