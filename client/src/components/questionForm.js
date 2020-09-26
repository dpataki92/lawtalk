import React, { Component } from 'react';
import FieldList from './fieldList.js'
import { connect } from "react-redux";
import EUJurisdictionList from './euJurisdictionList.js';
import USAJurisdictionList from './usaJurisdictionList.js';
import { createBrowserHistory } from './history';
import history from './history';




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

    handleSubmit = () => {
        fetch("/api/questions", {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`},
            body: JSON.stringify(this.state)
          })
          .then(resp => resp.json())
          .then(function(json) {
            console.log(json);
            if (json.message === "success") {
                alert("You have created a question");
                history.push('/questions/all')
            } else {
                alert("Invalid data. Please try again.")
            }
          })
    }

    render() {
        return(
            <div class="container">
	        <div class="row">
	    
                <div class="col-md-8 col-md-offset-2">
                    
                    <h1>Create question</h1>
                    
                    <form onSubmit={this.handleSubmit}>
                        
                        <div class="form-group">
                            <label for="title">Title </label>
                            <input type="text" class="form-control" name="title" onChange={this.handleChange} value={this.state.title} required/>
                        </div>

                        {<FieldList setField={this.setField}/>}
                        <button onClick={this.handleJurisdictionCategoryClick} style={{marginLeft: "10px"}}>EU</button> <div id="EUlist" style={{display: "none", marginRight: "10px"}}>{<EUJurisdictionList setJurisdiction={this.setJurisdiction}/>}</div>
                        <button onClick={this.handleJurisdictionCategoryClick}>USA</button> <div id="USlist" style={{display: "none", marginRight: "5px"}}>{<USAJurisdictionList setJurisdiction={this.setJurisdiction}/>}</div>
                        
                        <div class="form-group" style={{marginTop: "10px"}}>
                            <label for="description">Content </label>
                            <textarea rows="5" class="form-control" name="content" onChange={this.handleChange} value={this.state.content} ></textarea>
                        </div>
                        
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">
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

export default connect(mapStateToProps)(QuestionForm);