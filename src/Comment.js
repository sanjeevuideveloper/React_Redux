import {useParams} from 'react-router-dom';

function Comment(){
	let params=useParams();
	return(
		<div>
		Parameter that was passed is :{params.id}
		</div>
		)
}

export default Comment;