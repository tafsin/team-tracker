
import './App.css';
import React from 'react';

import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';
import TeamCard from './components/TeamCards/TeamCard';

function App() {
  return (
    
      
      <Router>
        <Switch>
          <Route  path="/home">
          <Home></Home>
          </Route>
          <Route exact  path="/">
          <Home></Home>
          </Route>
          
          <Route  path="/team/:teamId">
            <TeamDetails></TeamDetails>
          
          </Route>
        </Switch>
      </Router>
 
   
  );
}

export default App;
