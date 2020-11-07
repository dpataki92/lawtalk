import React, { Component } from 'react';
import FieldList from '../QuestionLists/fieldList.js'
import { connect } from "react-redux";
import EUJurisdictionList from '../QuestionLists/euJurisdictionList.js';
import USAJurisdictionList from '../QuestionLists/usaJurisdictionList.js';
import { withRouter } from 'react-router';


class QuestionForm extends Component {
    state = {
        title: "",
        field: "",
        jurisdiction: "",
        content: "",
        username: this.props.currentUser.username
    }

    handleJurisdictionCategoryClick = (e) => {
        e.preventDefault();
        const EUlist = document.getElementById("EUlist");
        const USlist = document.getElementById("USlist");
        if (e.target.innerText === "EU")  {
            EUlist.style.display = "inline";
            if (USlist.style.display === "inline") {
                USlist.style.display = "none";
            }
        } else if (e.target.innerText === "USA") {
            USlist.style.display = "inline";
            if (EUlist.style.display === "inline") {
                EUlist.style.display = "none";
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setField = (selected) => {
        this.setState({
            field: selected
        })
    }

    setJurisdiction = (selected) => {
        this.setState({
            jurisdiction: selected
        })
    }

    handleSubmit = (e) => {
        let props = this.props
        e.preventDefault();
        fetch("/api/questions", {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`},
            body: JSON.stringify(this.state)
          })
          .then(resp => resp.json())
          .then(function(json) {
            if (json.message === "success") {
                alert("You have created a question");
                props.history.push('/questions/all');
            } else {
                alert("Invalid data. Please try again.")
            }
          })
    }

    render() {
        return(
            <div className="container">
	        <div className="row">
                <div className="col-md-8 col-md-offset-2">  
                    <h1>Create question</h1>
                    <form >  
                        <div className="form-group">
                            <label for="title">Title </label>
                            <input type="text" className="form-control" name="title" onChange={this.handleChange} value={this.state.title} required/>
                        </div>

                        {<FieldList setField={this.setField}/>}
                        <button className="search-button" onClick={this.handleJurisdictionCategoryClick} style={{marginLeft: "10px"}}>EU</button> <div id="EUlist" style={{display: "none", marginRight: "10px"}}>{<EUJurisdictionList setJurisdiction={this.setJurisdiction}/>}</div>
                        <button className="search-button" onClick={this.handleJurisdictionCategoryClick}>USA</button> <div id="USlist" style={{display: "none", marginRight: "5px"}}>{<USAJurisdictionList setJurisdiction={this.setJurisdiction}/>}</div>
                        
                        <div className="form-group" style={{marginTop: "10px"}}>
                            <label for="description">Content </label>
                            <textarea rows="5" className="form-control" name="content" onChange={this.handleChange} value={this.state.content} ></textarea>
                        </div>
                        
                        <div className="form-group">
                            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
                                Create
                            </button>
                        </div>  
                    </form>
                </div>	
            </div>
        </div>
        )
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser    
    }
  }

export default withRouter(connect(mapStateToProps)(QuestionForm));