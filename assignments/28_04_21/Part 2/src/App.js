import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Shopping-Cart/Navbar'
import Home from './Shopping-Cart/Home'
import Cart from './Shopping-Cart/Cart'



import store from './store/store';
  store.subscribe(function(){
    let currenState=store.getState();
    console.log(currenState);
  })
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/decrease'});

class App extends Component {
    constructor(props){
      super(props);
    }
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              {<Navbar/>}
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
