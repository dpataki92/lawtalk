import React, {Component} from 'react';
import '../App.css';
import  { logout } from "../actions/currentUser.js";
import { connect } from "react-redux";
import Navbar from "./Account/navbar.js"
import QuestionForm from './Threads/questionForm.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuestionContainer from './QuestionLists/questionContainer.js';
import TopUsers from './Users/topUsers.js';
import ProfilePage from './Users/profilePage.js';
import Thread from './Threads/thread.js';
import EditQuestionForm from './Threads/editQuestionForm.js';
import EditProfile from './Users/editProfile.js';
import MessagesContainer from "./Users/messagesContainer.js";


class Home extends Component {

    render() {
        return(
            <Router>
                <React.Fragment>
                <Navbar logout={this.props.logout} id={this.props.currentUser.id} />
                <Switch>
                <Route exact path="/" render={(props) => <QuestionContainer {...props} followed={"false"}/>}/>
                <Route key="all" exact path="/questions/all" render={(props) => <QuestionContainer {...props} followed={"false"}/>}/>
                <Route key="followed" exact path="/questions/followed" render={(props) => <QuestionContainer {...props} followed={"true"}/>}/>
                <Route key="new" exact path="/questions/new" render={() => <QuestionForm />} />
                <Route key="edit question" exact path="/questions/:id/edit" component={EditQuestionForm} />
                <Route key="thread" exact path="/questions/:id" component={Thread} />
                <Route key="top" exact path="/users/top" render={() => <TopUsers />} />
                <Route key="edit profile" exact path="/users/:id/edit" component={EditProfile} />
                <Route key="profile" exact path="/users/:id" component={ProfilePage} />
                <Route key="messages" exact path="/users/:id/messages" component={MessagesContainer} />
                </Switch>
                </React.Fragment>
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return ({ currentUser: state.currentUser })
}

export default connect(mapStateToProps, { logout })(Home);