import {useState, useEffect} from "react";
import  axios from 'axios';
import loader from './loader.gif'
function UserDetails(){
	const [user, setUser]=useState({"name":"default name","hobby":[]});
	const [showImg, setShowImg] = useState(false);
	const [title, setTitle] = useState('Default title');
	useEffect(()=>{
		setShowImg(true);
		setTimeout(()=>{
   		axios.get('/user.json').then(function(res){
			console.log(res);
			
			setUser(res.data)
		}).catch(err=>{
			console.log('some error came');
			console.log(err.toString());
		}).finally(()=>{
			console.log("job done");
			setShowImg(false);
		})
		},5000)
		
	},[])
	return (
		<div>
			<h1>{title}</h1>
			<h3>See the user details</h3><br/>
			{showImg?<img  src={loader}/>:''}
			Name={user.name}<br/>
			<input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

		</div>
		)
}
export default UserDetails;