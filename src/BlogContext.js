import {useContext} from 'react';
import React from 'react';
import CommentContext from './CommentContext';
import UserProfleContext from './UserProfleContext';
export const BlogsNoContext=React.createContext(20);
function BlogContext(){
	const noOfBlogs=10;
	
	return(
		<div>
			<BlogsNoContext.Provider value={noOfBlogs}>
			<CommentContext/>
			<UserProfleContext/>
			</BlogsNoContext.Provider>

		</div>
		)
}

export default BlogContext;