import logo from './logo.svg';
import './App.css';
import TodoContainer from './todo app/TodoContainer';
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

       <TodoContainer/>
      </div>
    );
}


export default App;
