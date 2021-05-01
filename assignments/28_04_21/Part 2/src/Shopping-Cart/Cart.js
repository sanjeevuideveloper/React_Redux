import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { REMOVE_ITEM, ADD_QUANTITY,SUB_QUANTITY} from '../actions/CartActions'
import Recipe from './Recipe'

class Cart extends Component{
	constructor(props){
		super(props);
		console.log(props);
	}
	//to remove the item completely
    handleRemove = (id)=>{
        this.props.REMOVE_ITEM(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.ADD_QUANTITY(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.SUB_QUANTITY(id);
    }


    render(){
    	let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}
const mapStateToProps = (state)=>{
	
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        REMOVE_ITEM: (id)=>{dispatch(REMOVE_ITEM(id))},
        ADD_QUANTITY: (id)=>{dispatch(ADD_QUANTITY(id))},
        SUB_QUANTITY: (id)=>{dispatch(SUB_QUANTITY(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)