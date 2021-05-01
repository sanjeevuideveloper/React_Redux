import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_SHIPPING,SUB_SHIPPING } from '../actions/CartActions'

class Recipe extends Component{
	constructor(props){
		super(props);
	}
	handleChecked=(e)=>{
		if(e.target.checked){
			this.props.ADD_SHIPPING();
		}
		else{
			this.props.SUB_SHIPPING();
		}
	}

	componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.SUB_SHIPPING()
    }

    render(){
    	return(
    			<div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
    		)
    }
      
}
const mapStateToProps = (state)=>{
    
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        ADD_SHIPPING: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        SUB_SHIPPING: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)