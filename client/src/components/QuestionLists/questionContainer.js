import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionList from './questionList.js';
import Pagination from './pagination.js';
import SearchBar from './searchbar';
import QuestionListHeader from './questionListHeader.js'
import  { getCurrentQuestions } from "../../actions/questions.js";

class QuestionContainer extends Component {
    state = {
        field: "",
        jurisdiction: "",
        searchWord: "",
        pageNumber: "",
        order: "creation",
        jurisdictionCategory: "",
        followed: this.props.followed,
        username: this.props.currentUser.username
    }

    componentDidMount() {
        this.props.getCurrentQuestions(this.state);
    }


    // Searchbar functions

    handleSearchClick = () => {
        this.props.getCurrentQuestions(this.state)
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
        this.setState({
            order: value
        })
    }

    handleOrderOnLeave = (e) => {
        let value = e.target.innerText.slice(0,-2).toLowerCase();
        let prevValue = (value === "creation" ? "relevance" : "creation");
        this.setState({
            order: prevValue
        })
    }

    setField = (selected) => {
        this.setState({
            field: selected
        })
    }

    setPageBackToOne = (e) => {
        this.setState({
            pageNumber: "1"
        })
        document.querySelectorAll(".pageNum").forEach((el,i) => {
            el.innerText = i+1
            
        })
        document.querySelector("li.page-item.active").classList = "page-item";
        document.getElementById("firstPage").classList = "page-item active";

    }

    // Pagination functions
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

    render() {
        return(
            <React.Fragment>
                <SearchBar handleOnChange={this.handleOnChange} handleJurisdictionButton={this.handleJurisdictionButton} setJurisdiction={this.setJurisdiction} ordering={this.ordering} 
            handleOrderOnEnter={this.handleOrderOnEnter} handleOrderOnLeave={this.handleOrderOnLeave} setField={this.setField} setPageBackToOne={this.setPageBackToOne} 
            searchWord={this.state.searchWord} jurisdictionCategory={this.state.jurisdictionCategory} handleSearchClick={this.handleSearchClick}/>
            <div className="container-fluid mt-100">
                <QuestionListHeader />
                <QuestionList questions={this.props.questions} currentUser={this.props.currentUser.username}/>
                <Pagination handlePageChangeOnEnter={this.handlePageChangeOnEnter} handleOrderOnLeave={this.handlePageChangeOnLeave} getQuestionsBasedOnPageNumber={this.getQuestionsBasedOnPageNumber}/>
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

export default connect(mapStateToProps, { getCurrentQuestions })(QuestionContainer);