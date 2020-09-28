import React, { Component } from 'react';
import { connect } from "react-redux";
import DeleteButton from "./deleteButton.js";
import FieldList from './fieldList.js'
import EUJurisdictionList from './euJurisdictionList.js';
import USAJurisdictionList from './usaJurisdictionList.js';

class EditQuestionForm extends Component {
    state = {
        title: this.props.currentQuestion.title,
        field: "",
        jurisdiction: "",
        content: this.props.currentQuestion.content,
        username: this.props.currentUser.username
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div class="container">
	        <div class="row">
	    
                <div class="col-md-8 col-md-offset-2">
                    
                    <h1>Edit question</h1>
                    
                    <form >
                        
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
                            <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">
                                Update
                            </button>
                            < DeleteButton/>
                        </div>  
                    </form>
                </div>	
            </div>
        </div>
        )
    }
}

const mapStateToProps = ({currentUser, currentQuestion}) => {
    return {
      currentUser,
      currentQuestion   
    }
  }

export default connect(mapStateToProps)(EditQuestionForm);
