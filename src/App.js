import logo from './logo.svg';
import './App.css';
import ReduxCounter from './ReduxCounter';
import SimpleBarChart from './SimpleBarChart';
import SimpleLineChart from './SimpleLineChart';
import TodoContainer from './todo app/TodoContainer';
import ForumContainer from './forum app/ForumContainer';

import store from './store/store';
  store.subscribe(function(){
    let currenState=store.getState();
    console.log(currenState);
  })
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/increase'});
  // store.dispatch({type:'counter/decrease'});
function App() {
 
  return (
    <div className="App">
    <TodoContainer/>
    <ForumContainer/>
      <ReduxCounter/>
      <SimpleBarChart/>
      <SimpleLineChart/>

    </div>
  );
}

export default App;
