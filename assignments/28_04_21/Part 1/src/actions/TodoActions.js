
const addTodo=(value)=>{
	return ({type:'todo/add', value:value})
  }
const deleteTodo=(id)=>{
	return ({type:'todo/delete', id:id})
  }  
 

      

export {addTodo, deleteTodo};