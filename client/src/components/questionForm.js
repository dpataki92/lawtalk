import React, { Component } from 'react';
import FieldList from './fieldList.js'
import { connect } from "react-redux";
import EUJurisdictionList from './euJurisdictionList.js';
import USAJurisdictionList from './usaJurisdictionList.js';


class QuestionForm extends Component {
    state = {
        title: "",
        field: "",
        jurisdiction: "",
        content: "",
        currentUser: this.props.currentUser
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

    render() {
        return(
            <div class="container">
	        <div class="row">
	    
                <div class="col-md-8 col-md-offset-2">
                    
                    <h1>Create question</h1>
                    
                    <form >
                        
                        <div class="form-group">
                            <label for="title">Title <span class="require">*</span></label>
                            <input type="text" class="form-control" name="title" />
                        </div>

                        {<FieldList />}<br/>
                        <button onClick={this.handleJurisdictionCategoryClick}>EU</button> <div id="EUlist" style={{display: "none"}}>{<EUJurisdictionList />}</div>
                        <button onClick={this.handleJurisdictionCategoryClick}>USA</button> <div id="USlist" style={{display: "none"}}>{<USAJurisdictionList />}</div>
                        
                        <div class="form-group">
                            <label for="description">Content </label>
                            <textarea rows="5" class="form-control" name="description" ></textarea>
                        </div>
                        
                        <div class="form-group">
                            <p><span class="require">*</span> - required fields</p>
                        </div>
                        
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">
                                Create
                            </button>
                            <button class="btn btn-default">
                                Cancel
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