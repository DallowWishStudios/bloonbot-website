import React from 'react';
// import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import BBTE from './pages/BBTE'
import Main from './pages/Main'

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/bbte'>
            <BBTE />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
