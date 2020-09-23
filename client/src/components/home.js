import React from 'react';
import '../App.css';
import  { logout } from "../actions/currentUser.js";
import { connect } from "react-redux";
import Navbar from "./navbar.js"
import QuestionForm from './questionForm.js';
import {BrowserRouter as Router, Switch, Route, withRouter, Link} from 'react-router-dom';
import QuestionContainer from './questionContainer.js';


class Home extends React.Component {

    render() {
        return(
            <Router>
            <div>
            <Navbar logout={this.props.logout} />
            <Switch>
            <Route exact path="/" render={(props) => <QuestionContainer {...props} followed={"false"}/>}/>
            <Route key="all" exact path="/questions/all" render={(props) => <QuestionContainer {...props} followed={"false"}/>}/>
            <Route key="followed" exact path="/questions/followed" render={(props) => <QuestionContainer {...props} followed={"true"}/>}/>
            <Route exact path="/create" render={() => <QuestionForm />} />
            </Switch>
            </div>
            </Router>
        )
    }
}

export default connect(null, { logout })(Home);