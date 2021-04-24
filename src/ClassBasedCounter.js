import {Component} from 'react';
class ClassBasedCounter extends Component{
	constructor(props){
		super(props);
		this.state={
			count:0,
			title:"This is default title"
		}
	this.increase=this.increase.bind(this);
	this.decrease=this.decrease.bind(this);
	}
	
	increase(){
		this.setState({count:this.state.count+parseInt(this.props.step)});
	}
	decrease(){
		this.setState({count:this.state.count-parseInt(this.props.step)});
	}
	componentWillMount(){
		console.log("Before Component is mounted");
	}
	componentDidMount(){
		console.log("Called after react Component is placed in html page");
	}
	componentDidUpdate(prevProps,prevState,snapshot){
		//alert(prevState.count);
		console.log("some state variable has changed to this function is called");
	}
	componentWillUnmount(){
		console.log("component is removed from the dom");
		alert("component is removed from the dom");
	}

	render(){
		return(
 			<div>
 			<h1>{this.state.title}</h1>
 			Count = {this.state.count}<br/>
 			<button onClick={this.increase}>increase</button>
 			<button onClick={this.decrease}>decrease</button>
 			</div>
			)
	}
}

export default ClassBasedCounter;