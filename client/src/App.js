import React from 'react';
import './App.css';
import Login from "./components/login"
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/api/home" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
