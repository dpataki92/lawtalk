import React from 'react';
import '../App.css';
import  { logout } from "../actions/currentUser.js";
import { connect } from "react-redux";
import Navbar from "./navbar.js"
import QuestionForm from './questionForm.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuestionContainer from './questionContainer.js';
import TopUsers from './topUsers.js';


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
            <Route exact path="/questions/new" render={() => <QuestionForm />} />
            <Route exact path="/users/top" render={() => <TopUsers />} />
            </Switch>
            </div>
            </Router>
        )
    }
}

export default connect(null, { logout })(Home);