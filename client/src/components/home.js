import React from 'react';
import '../App.css';
import  { logout } from "../actions/currentUser.js";
import { connect, ReactReduxContext } from "react-redux";
import Navbar from "./navbar.js"
import QuestionList from './questionList';
import  { getCurrentQuestions } from "../actions/questions.js";
import JursidictionList from './jurisdictionList.js';
import FieldList from './fieldList.js';

class Home extends React.Component {

    state = {
        field: "",
        jurisdiction: "",
        searchWord: "",
        pageNumber: "",
        order: "creation",
        jurisdictionCategory: "",
        followed: "false",
        username: this.props.currentUser.username
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

    getQuestionsBasedOnPageNumber = (e) => {
        document.querySelector("li.page-item.active").classList = "page-item";
        e.target.parentNode.classList = "page-item active";
        this.props.getCurrentQuestions(this.state);
    }

    handlePageChangeOnEnter = (e) => {
        this.setState({
            pageNumber: e.target.innerHTML
        })

        }
    handlePageChangeOnLeave = (e) => {
        this.setState({
            pageNumber: ""
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
    }

    setJurisdiction = (selected) => {
        this.setState({
            jurisdiction: selected
        })
    }

    ordering = (e) => {
        let orderingButton = e.target;
        orderingButton.innerText === "Creation ↓" ? orderingButton.innerText = "Relevance ↓" : orderingButton.innerText = "Creation ↓";
        this.props.getCurrentQuestions(this.state);
        let value = e.target.innerText.slice(0,-2).toLowerCase();
        this.setState({
            order: value
        })
    }

    handleOrderOnEnter = (e) => {
        let value = e.target.innerText.slice(0,-2).toLowerCase();
        console.log(this.state.order)
        this.setState({
            order: value
        })
    }

    handleOrderOnLeave = (e) => {
        let value = e.target.innerText.slice(0,-2).toLowerCase();
        let prevValue = (value === "creation" ? "relevance" : "creation");
        console.log(this.state.order)
        this.setState({
            order: prevValue
        })
    }

    setField = (selected) => {
        this.setState({
            field: selected
        })
    }

    handleSearchClick = () => {
        this.props.getCurrentQuestions(this.state)
    }

    setPageBackToOne = (e) => {
        this.setState({
            pageNumber: "1"
        })
        document.querySelector("li.page-item.active").classList = "page-item";
        e.target.parentNode.classList = "page-item active";
    }

    setFollowed = () => {
        if (this.state.followed === "false") {
            this.setState({
                followed: "true"
            })
        } else if (this.state.followed === "true") {
            this.setState({
                followed: "false"
            })
        }
    }

    render() {

        return(
            <React.Fragment>
            <Navbar logout={this.props.logout} handleSearchClick={this.handleSearchClick} setFollowed={this.setFollowed}/>
            <br></br>
            <div className="container-fluid mt-100">
    <div className="d-flex flex-wrap justify-content-between">
        <div> <button type="button" className="btn btn-shadow btn-wide btn-primary">  <span className="btn-icon-wrapper pr-2 opacity-7"> <i className="fa fa-plus fa-w-20"></i> </span> New question </button> </div>
        <button id="order" onMouseEnter={this.handleOrderOnEnter} onMouseLeave={this.handleOrderOnLeave} onClick={this.ordering}>{`${"Relevance ↓" }`}</button>
    </div>
    <div className="d-flex flex-wrap justify-content-between" style={{marginTop:"5px"}}>
    <div className="col-12 col-md-3 p-0 mb-3"> <input type="text" name="searchWord" className="form-control" placeholder="Search word..." onChange={this.handleOnChange} value={this.state.searchWord}/> </div>
        <div className="col-12 col-md-3 p-0 mb-3"> {<FieldList setField={this.setField}/>} </div>
        <div className="col-12 col-md-3 p-0 mb-3" id="jurisdiction"> <button id="EU" className="jurisdictionList" onClick={this.handleJurisdictionButton} style={{marginRight:"5px"}}>EU</button>
                 OR <button id="USA" className="jurisdictionList" onClick={this.handleJurisdictionButton} style={{marginLeft:"5px"}}>USA</button>{<JursidictionList category={this.state.jurisdictionCategory} setJurisdiction={this.setJurisdiction}/>}</div>
        <button onMouseDown={this.setPageBackToOne} onMouseUp={this.handleSearchClick}>Search</button>
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
            <li className="page-item active"><a className="page-link" href="javascript:void(0)" data-abc="true" onMouseEnter={this.handlePageChangeOnEnter} onMouseLeave={this.handlePageChangeOnLeave} onClick={this.getQuestionsBasedOnPageNumber}>1</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)" data-abc="true" onMouseEnter={this.handlePageChangeOnEnter} onMouseLeave={this.handlePageChangeOnLeave} onClick={this.getQuestionsBasedOnPageNumber}>2</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)" data-abc="true" onMouseEnter={this.handlePageChangeOnEnter} onMouseLeave={this.handlePageChangeOnLeave} onClick={this.getQuestionsBasedOnPageNumber}>3</a></li>
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