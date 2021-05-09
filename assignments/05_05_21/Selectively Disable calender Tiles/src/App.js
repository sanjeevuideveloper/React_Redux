import logo from './logo.svg';
import './App.css';
import SimpleCalender from './SimpleCalender';
// import Register from './authentication/Register';
// import Login from './authentication/Login';
// import Member from './Member';
// import Profile from './Profile';
// import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
// import TodoContainer from './todo app/TodoContainer';
//import store from './store/store';
  // store.subscribe(function(){
  //   let currenState=store.getState();
  //   console.log(currenState);
  // })
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/decrease'});

function App() {
  return (
    <div className="App">
      <SimpleCalender/>
    {/*<BrowserRouter>
    <div>
           <Link to="/login">Login</Link>&#200;
            <Link to="/register">Register</Link>&#200;
             <Link to="/userprofile">User Profile</Link>
      </div>
     
      <Route path="/login">
        <Login/>
      </Route>
       <Route path="/register">
        <Register/>
      </Route>
       <Route path="/member">
        <Member/>
      </Route>
       <Route path="/userprofile">
        <Profile/>
      </Route>
      
    </BrowserRouter>*/}

      </div>
    );
}


export default App;
