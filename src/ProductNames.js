import {useState, useEffect} from "react";
import  axios from 'axios';
function ProductNames(){
	const [productname, setProductNames]=useState([]);
	useEffect(()=>{
		axios.get('/productnames.json').then(function(res){
			console.log(res);
			let temp=[...res.data.products]
			setProductNames(res.data.products)
		})
	},[])
	return (
		<div className="App-product">
			<h1>ProductName</h1>
			<ul>
			{
				productname.map(function(val){
                  return(
                    <li>{val}</li>
                  	)
				})
			}
			</ul>
		</div>
		)
}
export default ProductNames;