
const ADD_TO_CART=(id)=>{
	return ({type:'ADD_TO_CART', id:id})
  }
const REMOVE_ITEM=(id)=>{
	return ({type:'REMOVE_ITEM', id:id})
  } 
 const ADD_QUANTITY=(id)=>{
	return ({type:'ADD_QUANTITY', id:id})
  } 
 const SUB_QUANTITY=(id)=>{
	return ({type:'SUB_QUANTITY', id:id})
  } 
  const ADD_SHIPPING=(id)=>{
	return ({type:'ADD_SHIPPING'})
  } 
  const SUB_SHIPPING=(id)=>{
	return ({type:'SUB_SHIPPING'})
  }  
 

      

export {ADD_TO_CART,REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY, ADD_SHIPPING, SUB_SHIPPING};