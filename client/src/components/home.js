import React, {Component} from 'react';
import '../App.css';
import  { logout } from "../actions/currentUser.js";
import { connect } from "react-redux";
import Navbar from "./navbar.js"
import QuestionForm from './questionForm.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuestionContainer from './questionContainer.js';
import TopUsers from './topUsers.js';
import ProfilePage from './profilePage.js';
import Thread from './thread.js';
import EditQuestionForm from './editQuestionForm.js';


class Home extends Component {

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
            <Route key="edit question" path="/questions/:id/edit" component={EditQuestionForm} />
            <Route key="thread" path="/questions/:id" component={Thread} />
            <Route key="top" path="/users/top" render={() => <TopUsers />} />
            <Route key="profile" path="/users/:id" component={ProfilePage} />
            </Switch>
            </div>
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return ({ currentProfile: state.currentProfile })
  }
export default connect(mapStateToProps, { logout })(Home);