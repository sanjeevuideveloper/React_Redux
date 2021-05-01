import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ADD_TO_CART } from '../actions/CartActions'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = theme=>({
  root: {
    maxWidth: 345,
    margin:10
  },
  media: {
    height: 250,
  }
  
});
class Home extends Component
{   
	constructor(props){
		super(props);
    console.log(props);
		
	} 

	
	handleClick=(id)=>{
		this.props.ADD_TO_CART(id);
    alert('Item added to your cart');
	}

	render(){
		 const { classes } = this.props;
		let itemList=this.props.items.map(item=>{
			return(
				<Card className={classes.root} key={item.id}>
      				<CardActionArea>
        				<CardMedia
          						className={classes.media}
          						image={item.img}
          						title={item.title}
        				/>
        				<CardContent>
         					 <Typography gutterBottom variant="h5" component="h2">
          						{item.title}
          					</Typography>
          					<Typography variant="body2" color="textSecondary" component="p">
            					{item.desc}
          					</Typography>
          					<Typography variant="body2" color="textSecondary" component="p">
           						<b>Price: {item.price}$</b>
          					</Typography>
        				</CardContent>
      				</CardActionArea>
      				<CardActions>
       						<Button variant="contained" color="primary" onClick={()=>{this.handleClick(item.id)}}>
  								Add to cart
							</Button>
        
      				</CardActions>
    			</Card>

				)
		})
		return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
	}
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        ADD_TO_CART: (id)=>{dispatch(ADD_TO_CART(id))}
    }
}
export default withStyles(useStyles)(connect(mapStateToProps,mapDispatchToProps)(Home));