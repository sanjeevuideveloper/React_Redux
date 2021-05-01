
const addTodo=(value)=>{
	return ({type:'todo/add', value:value})
  }
const deleteTodo=(id)=>{
	return ({type:'todo/delete', id:id})
  }  
 const addForumTopic=(topic, user)=>{
	return ({type:'forum/add', topic:topic, user:user})
  }
const deleteForumTopic=(id)=>{
	return ({type:'forum/delete', id:id})
  } 
const deleteFiveMinBeforeTopic=()=>{
	return({type:'forum/deleteFiveMinBeforeTopic'})
}  

      

export {addTodo, deleteTodo,deleteForumTopic,addForumTopic,deleteFiveMinBeforeTopic};