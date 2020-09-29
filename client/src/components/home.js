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
import EditProfile from './editProfile.js';


class Home extends Component {

    render() {

        return(
            <Router>
            <div>
            <Navbar logout={this.props.logout} id={this.props.currentUser.id} />
            <Switch>
            <Route exact path="/" render={(props) => <QuestionContainer {...props} followed={"false"}/>}/>
            <Route key="all" exact path="/questions/all" render={(props) => <QuestionContainer {...props} followed={"false"}/>}/>
            <Route key="followed" exact path="/questions/followed" render={(props) => <QuestionContainer {...props} followed={"true"}/>}/>
            <Route key="new" exact path="/questions/new" render={() => <QuestionForm />} />
            <Route key="edit question" exact path="/questions/:id/edit" component={EditQuestionForm} />
            <Route key="thread" eaxact path="/questions/:id" component={Thread} />
            <Route key="top" exact path="/users/top" render={() => <TopUsers />} />
            <Route key="edit profile" path="/users/:id/edit" component={EditProfile} />
            <Route key="profile" exact path="/users/:id" component={ProfilePage} />
            </Switch>
            </div>
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return ({ currentProfile: state.currentProfile, currentUser: state.currentUser })
  }
export default connect(mapStateToProps, { logout })(Home);