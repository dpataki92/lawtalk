import React from 'react';
import '../App.css';
import  { logout } from "../actions/currentUser.js";
import { connect, ReactReduxContext } from "react-redux";
import Navbar from "./navbar.js"
import QuestionList from './questionList';
import  { getCurrentQuestions } from "../actions/questions.js";
import JursidictionList from './jurisdictionList.js';

class Home extends React.Component {

    state = {
        field: "",
        jurisdiction: "",
        searchWord: "",
        pageNumber: "",
        jurisdictionCategory: ""
    }


    componentDidMount() {
        this.props.getCurrentQuestions(this.state);
        console.log(this.props)
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getQuestionsWithUpdatedState = (e) => {
        console.log(this.state)
        document.querySelector("li.page-item.active").classList = "page-item";
        e.target.parentNode.classList = "page-item active";
        this.props.getCurrentQuestions(this.state);
    }

    handlePageChange = (e) => {
        this.setState({
            pageNumber: e.target.innerHTML
        })

        }
    
    handleJurisdictionButton = (e) => {
        e.preventDefault();
        if (e.target.id === "EU") {
            e.target.parentNode.innerHTML ="";
            this.setState({
                jurisdictionCategory: "EU"
            })
        } else if (e.target.id === "USA") {
            e.target.parentNode.innerHTML ="";
            this.setState({
                jurisdictionCategory: "USA"
            })
        }
        this.state.jurisdiction = e.target.id;
    }

    render() {

        return(
            <React.Fragment>
            <Navbar logout={this.props.logout}/>
            <br></br>
            <div className="container-fluid mt-100">
    <div className="d-flex flex-wrap justify-content-between">
        <div> <button type="button" className="btn btn-shadow btn-wide btn-primary">  <span className="btn-icon-wrapper pr-2 opacity-7"> <i className="fa fa-plus fa-w-20"></i> </span> New question </button> </div>
        <button onClick={this.handleLogout}>{`${"Creation ↓" }`}</button>
    </div>
    <div className="d-flex flex-wrap justify-content-between" style={{marginTop:"5px"}}>
    <div className="col-12 col-md-3 p-0 mb-3"> <input type="text" name="searchWord" className="form-control" placeholder="Search..." onChange={this.handleOnChange} value={this.state.searchWord}/> </div>
        <div className="col-12 col-md-3 p-0 mb-3"> <input type="text" name="searchWord" className="form-control" placeholder="Search..." onChange={this.handleOnChange} value={this.state.searchWord}/> </div>
        <div className="col-12 col-md-3 p-0 mb-3" id="jurisdiction"> <button id="EU" className="jurisdictionList" onClick={this.handleJurisdictionButton} style={{marginRight:"5px"}}>EU</button>
                 OR <button id="USA" className="jurisdictionList" onClick={this.handleJurisdictionButton} style={{marginLeft:"5px"}}>USA</button>{<JursidictionList category={this.state.jurisdictionCategory}/>}</div>
        <button >Search</button>
    </div>
    <div className="card mb-3">
        <div className="card-header pl-0 pr-0">
            <div className="row no-gutters w-100 align-items-center">
        <div className="col ml-3">Questions </div>
                <div className="col-4 text-muted">
                    <div className="row no-gutters align-items-center">
                        <div className="col-4">Replies</div>
                        <div className="col-8">Last update</div>
                        
                    </div>
                </div>
            </div>
        </div>
     
    </div>
    <QuestionList questions={this.props.questions}/>
    <nav>
        <ul className="pagination mb-5">
            <li className="page-item disabled"><a className="page-link" href="javascript:void(0)" data-abc="true">«</a></li>
            <li className="page-item active"><a className="page-link" href="javascript:void(0)" data-abc="true" onMouseEnter={this.handlePageChange} onClick={this.getQuestionsWithUpdatedState}>1</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)" data-abc="true" onMouseEnter={this.handlePageChange} onClick={this.getQuestionsWithUpdatedState}>2</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)" data-abc="true" onMouseEnter={this.handlePageChange} onClick={this.getQuestionsWithUpdatedState}>3</a></li>
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



export default connect(mapStateToProps, { logout, getCurrentQuestions })(Home);