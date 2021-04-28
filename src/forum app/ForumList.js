import {useSelector} from 'react-redux';
import Forum from './Forum'
function ForumList(props){
	const forums=useSelector(state=>state.forums);
	return(
        <div>
        { 
          forums.map(item=><div><Forum forum={item}></Forum> <button onClick={()=>props.delete(item.id)}>Delete</button></div>)
        }
        </div>
		)
}
export default ForumList;