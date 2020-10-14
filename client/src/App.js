import React from 'react';
import './App.css';
import Login from "./components/Account/login.js"
import Home from './components/home';
import { connect } from 'react-redux';
import  {getCurrentUser } from "./actions/currentUser.js";
import Signup from './components/Account/signup.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  state = {
    signup: false
  }

  changeState = () => {
    this.setState({
      signup: !this.state.signup
    })
  }

  render () {
    let component;

    if (this.props.currentUser) {component = <Home />}
    else if (!this.state.signup) {component = <Login changeState={this.changeState}/>}
    else if (this.state.signup) {component = <Signup changeState={this.changeState}/>}

    return (
        component
    );
  }
  
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
