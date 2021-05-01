function Forum(props){
	return(
        <span>topic:{props.forum.topic} user:{props.forum.user} postDate:{props.forum.postingDate.toLocaleString()}</span>
		)
}
export default Forum;