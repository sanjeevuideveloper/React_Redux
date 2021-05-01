
function ForumForm(props){
	 
  
return(
        <div>
         <form onSubmit={props.addForum}>
      		Enter Topic: <input type="text"  name="forum"/><br/>
      		             <select name="user" placeholder="select user">
      						<option value="" disabled selected>Select User</option>
          					<option value={'sanjeev'}>sanjeev</option>
          					<option value={'rohit'}>rohit</option>
          					<option value={'ashish'}>ashish</option>
        				</select><br/>
        				<button>add Topic</button>
 		</form>
        </div>
     )
}

export default ForumForm;