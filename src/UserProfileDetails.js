import {useState, useEffect} from "react";

function UserProfileDetails(props){

	
	return (
		<div>
			Name:{props.user1.name}<br/>
			Location:{props.user1.location}<br/>
			

		</div>
		)
}
export default UserProfileDetails;