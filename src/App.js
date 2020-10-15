import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchFrom from './Components/SearchFrom';
import Food from './Components/Food';
import Error404 from './Components/Error404';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={SearchFrom}/>
         <Route exact path="/food/:name" component={Food}/>
         <Route exact path="/error" component={Error404}/>
         <Route component={Error404}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
