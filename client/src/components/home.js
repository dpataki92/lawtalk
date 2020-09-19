import React from 'react';
import '../App.css';
import  { logout } from "../actions/currentUser.js";
import { connect, ReactReduxContext } from "react-redux";
import Navbar from "./navbar.js"
import QuestionList from './questionList';

class Home extends React.Component {

    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return(
            <React.Fragment>
            <Navbar />
            <br></br>
            <div className="container-fluid mt-100">
    <div className="d-flex flex-wrap justify-content-between">
        <div> <button type="button" className="btn btn-shadow btn-wide btn-primary">  <span className="btn-icon-wrapper pr-2 opacity-7"> <i className="fa fa-plus fa-w-20"></i> </span> New thread </button> </div>
        <div className="col-12 col-md-3 p-0 mb-3"> <input type="text" className="form-control" placeholder="Search..."/> </div>
        <button onClick={this.handleLogout}>Logout</button>
    </div>
    <div className="card mb-3">
        <div className="card-header pl-0 pr-0">
            <div className="row no-gutters w-100 align-items-center">
                <div className="col ml-3">Topics</div>
                <div className="col-4 text-muted">
                    <div className="row no-gutters align-items-center">
                        <div className="col-4">Replies</div>
                        <div className="col-8">Last update</div>
                    </div>
                </div>
            </div>
        </div>
     <QuestionList questions={questions}/>
    </div>
    <nav>
        <ul className="pagination mb-5">
            <li className="page-item disabled"><a className="page-link" href="javascript:void(0)" data-abc="true">«</a></li>
            <li className="page-item active"><a className="page-link" href="javascript:void(0)" data-abc="true">1</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)" data-abc="true">2</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)" data-abc="true">3</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)" data-abc="true">»</a></li>
        </ul>
    </nav>
    
</div>
</React.Fragment>
        )
    }
}

const mapStateToProps = ({currentUser, questions}) => {
    return {
      currentUser,
      questions
    }
  }



export default connect(mapStateToProps, { logout })(Home);