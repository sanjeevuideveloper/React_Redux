import logo from './logo.svg';
import './App.css';

import About from './car_rental/About';
import GoogleMap from './car_rental/GoogleMap';
import Employees from './car_rental/Employees';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">

  <BrowserRouter>
  <div>
    <a href="/">Home</a>
    <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/employees">Employees</Link>
  </div>
  <Route path="/about">
      <About/>
  </Route>
  <Route path="/contact">
      <GoogleMap></GoogleMap>
  </Route>
  <Route path="/employees">
      <Employees/>
  </Route>

</BrowserRouter>

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
