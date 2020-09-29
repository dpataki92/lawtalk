import React from 'react';
import './App.css';
import Login from "./components/Account/login"
import Home from './components/home';
import { connect } from 'react-redux';
import  {getCurrentUser } from "./actions/currentUser.js";

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render () {
    return (
        this.props.currentUser ? <Home /> : <Login />
    );
  }
  
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
