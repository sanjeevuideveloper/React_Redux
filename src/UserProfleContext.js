import {useContext} from 'react';
import {BlogsNoContext} from './BlogContext';
function UserProfleContext(){
	const noOfBlogs=useContext(BlogsNoContext);
	return(
		<div>
			lets see common value in UserProfile component={noOfBlogs}<br/>
		</div>
		)
}
export default UserProfleContext;