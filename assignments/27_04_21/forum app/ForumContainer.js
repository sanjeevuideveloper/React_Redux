import {addForumTopic ,deleteForumTopic, deleteFiveMinBeforeTopic } from '../actions/TodoActions';
import ForumList from './ForumList';
import ForumForm from './ForumForm';
import {useDispatch} from 'react-redux';
function ForumContainer(){
 const dispatch=useDispatch();
 const addForum=(e)=>{
 	e.preventDefault();
 	let topic=e.target.forum.value;
 	let user= e.target.user.value;
    dispatch(addForumTopic(topic, user));
    e.target.forum.value=null;
    e.target.user.value=null;


 }
 const deleteForum=(id)=>{
    dispatch(deleteForumTopic(id))
 }

 const delete5MinBeforeTopic=()=>{
 	dispatch(deleteFiveMinBeforeTopic())
 }

 return(
 	<div>
 	   <h1>Forum List</h1>
 		<ForumList delete={deleteForum}></ForumList>
 		<ForumForm addForum={addForum}></ForumForm>
 		<button onClick={delete5MinBeforeTopic}>Delete5mins before topic</button>
 	</div>
 	)
}
export default ForumContainer;