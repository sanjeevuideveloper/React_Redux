import {useState, useEffect} from "react";
import UserProfileDetails from './UserProfileDetails';
import UserProfileForm from './UserProfileForm'

function UserProfile(){
	const [user, setUser]=useState({"name":"","location":''});
const changeName=(e)=>{
setUser({name:e.target.value, location:user.location})
}	
const changeLocation=(e)=>{
setUser({name:user.name, location:e.target.value})
}	
	
	return (
		<div>
			<UserProfileDetails user1={user}></UserProfileDetails>
			<UserProfileForm changeName={changeName} changeLocation={changeLocation}></UserProfileForm>

		</div>
		)
}
export default UserProfile;