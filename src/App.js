import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Counter from './Counter';
import Understandingstate from './UnderstandingState';
import RandomNo from './RandomNo';
import  PassingValueFunction from './PassingValueFunction';
import  HookUseEffectExample from './HookUseEffectExample';
import  UserDetails from './UserDetails';
import  ProductNames from './ProductNames';
import  ProductNamesInfo from './ProductNamesInfo';
import  UserProfile from './UserProfile';
import HobbySearch from './HobbySearch';
import Comment from './Comment';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import ClassBasedCounter from './ClassBasedCounter';
import {useState} from 'react';
import RefHook from './RefHook';
import BlogContext from './BlogContext';
import MemoTest from './MemoTest';
import WithUseMemo from './WithUseMemo';
import ParentComp from './ParentComp';
import ReduxCounter from './ReduxCounter';
import SimpleBarChart from './SimpleBarChart';
//import store from './store/store';
  // store.subscribe(function(){
  //   let currenState=store.getState();
  //   console.log('current state is :'+currenState.count);
  // })
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/decrease'});
function App() {
  let [step ,setStep] =useState(1);

  return (
    <div className="App">
    <ReduxCounter/>
    <SimpleBarChart></SimpleBarChart>
   {/* <ParentComp/>*/}
   {/* <WithUseMemo/>*/}
   {/* <MemoTest/>*/}
   {/* <BlogContext/>*/}
    {/*<input type="number" name="step" onChange={(e)=>{setStep(e.target.value)}}/>
<ClassBasedCounter step={step}></ClassBasedCounter>
<RefHook/>*/}
 {/* {<BrowserRouter>
    <a href="/">Home</a><br/>
    <a href="/searchhobby">Bad link for searchHobby, reloads full page</a><br/>
    <Link to="/comment/2">comment</Link><br/>
    <Link to="/searchhobby">searchHobby</Link><br/>
     <Link to="/counter">ClassBasedCounter</Link><br/>
    <Route path="/searchhobby">
      <HobbySearch/>
    </Route>
    <Route path="/comment/:id">
      <Comment/>
    </Route>
    <Route path="/counter">
     <ClassBasedCounter/>
    </Route>
    
</BrowserRouter>}*/}

   {/* <HobbySearch/>*/}
      {/*<UserDetails/>*/}
        {/* <UserProfile/>
    {/* <UserDetails/>
     {/*<ProductNames/>
    {/*<Understandingstate></Understandingstate>*/}
      {/*<Counter></Counter>*/}
    {/*<Login></Login>*/}
     {/*
    <h2> This is a Heading</h2>
    <div>is it a div</div>
   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    */}
    </div>
  );
}

export default App;
