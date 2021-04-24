import {useState, useEffect} from "react";
import  axios from 'axios';
function ProductNamesInfo(){
	const [productnameinfo, setProductNameInfo]=useState({"products":[],"brand":"","delivery":""});
	useEffect(()=>{
		axios.get('/productnamedetails.json').then(function(res){
			console.log(res);
			
			setProductNameInfo({"products":res.data.products,"brand":res.data.brand,"delivery":res.data.delivery})
		})
	},[])
function deleteProduct(index){
		let temp=productnameinfo.products.filter(function(item,ind){
          if(ind==index)
          	return false;
          return true;
		});

		setProductNameInfo({"products":temp,"brand":productnameinfo.brand,"delivery":productnameinfo.delivery})

}
function clearAll(){
setProductNameInfo({"products":[],"brand":productnameinfo.brand,"delivery":productnameinfo.delivery})
}

	return (
		<div className="App-product">
			<h1>{productnameinfo.brand}</h1>
			<ul>
			{
				productnameinfo.products.map(function(val,index){
                  return(
                    <li>{val} <button onClick={()=>deleteProduct(index)}>delete</button></li>
                  	)
				})
			}
			</ul>

			<div>{productnameinfo.delivery}</div>
			{
			productnameinfo.products.length > 0
					?<button onClick={clearAll}>clear</button>:null	
			}
			
		</div>
		)
}
export default ProductNamesInfo;