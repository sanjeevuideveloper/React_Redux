//function UserProfileForm(props){
function UserProfileForm({changeName, changeLocation}){
return (
		<div>
			
			<input type='text'  onChange={changeName} name="name" placeholder="changename"/><br/>
			<select name="location" onChange={changeLocation}>
				<option value="bng">Bng</option>
				<option value="hyd">Hyd</option>
			</select>

		</div>
		)
}
export default UserProfileForm;
