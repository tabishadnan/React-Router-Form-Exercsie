import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchFrom from './Components/SearchFrom';
import Food from './Components/Food';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={SearchFrom}/>
         <Route exact path="/food/:name" component={Food}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
