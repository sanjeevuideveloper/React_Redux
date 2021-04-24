import {useContext} from 'react';
import {BlogsNoContext} from './BlogContext';
function CommentContext(){
	const noOfBlogs=useContext(BlogsNoContext);
	return(
		<div>
			lets see common value in CommentContext component={noOfBlogs}<br/>
		</div>
		)
}
export default CommentContext;