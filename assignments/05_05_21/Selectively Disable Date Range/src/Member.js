
import { useHistory } from "react-router-dom";
import "./authentication/styles.css";
function Member(){
  const history= useHistory();
 const logout=()=>{
    localStorage.removeItem('token');
    history.push('/login');

 }
	return(
		<div className="auth">
		    <h1>Member Component</h1>
        <button onClick={logout}>Logout</button>

    </div>
		)
}

export default Member;