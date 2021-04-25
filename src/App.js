import logo from './logo.svg';
import './App.css';
import ReduxCounter from './ReduxCounter';
import SimpleBarChart from './SimpleBarChart';
import SimpleLineChart from './SimpleLineChart';
//import store from './store/store';
  // store.subscribe(function(){
  //   let currenState=store.getState();
  //   console.log('current state is :'+currenState.count);
  // })
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/decrease'});
function App() {
 
  return (
    <div className="App">
      <ReduxCounter/>
      <SimpleBarChart/>
      <SimpleLineChart/>
    </div>
  );
}

export default App;
