import React, { Component } from 'react';
import JursidictionList from './jurisdictionList.js';
import FieldList from './fieldList.js';
import EUJurisdictionList from './euJurisdictionList.js';
import USAJurisdictionList from './usaJurisdictionList.js' 
import {Link} from 'react-router-dom';

class SearchBar extends Component {

    render() {
        return(
            <div style={{marginLeft: "12px", marginRight:"12px"}}>
            <div className="d-flex flex-wrap justify-content-between">
                <div> <Link to="/questions/new"> <button type="button" className="btn btn-shadow btn-wide btn-primary">  <span className="btn-icon-wrapper pr-2 opacity-7"> <i className="fa fa-plus fa-w-20"></i> </span> New question </button> </Link> </div>
                <button className="search-button" id="order" onMouseEnter={this.props.handleOrderOnEnter} onMouseLeave={this.props.handleOrderOnLeave} onClick={this.props.ordering}>Popular ↓</button>
            </div>
            <div className="d-flex flex-wrap justify-content-between" style={{marginTop:"5px"}}>
                <div className="col-12 col-md-3 p-0 mb-3"> 
                    <input id="word-search" type="text" name="searchWord" className="form-control" placeholder="Search word" onChange={this.props.handleOnChange} value={this.props.searchWord}/> 
                </div>
                <div className="col-12 col-md-3 p-0 mb-3"> 
                    {<FieldList setField={this.props.setField}/>} 
                </div>
                <div className="col-12 col-md-3 p-0 mb-3" id="jurisdiction"> 
                        <button id="EU" className="jurisdictionList search-button" onClick={this.props.handleJurisdictionButton} style={{marginRight:"5px"}}>EU</button><div id="EUlist" style={{display: "none", marginRight: "10px"}}>{<EUJurisdictionList setJurisdiction={this.props.setJurisdiction}/>}</div>
                        <button id="US" className="jurisdictionList search-button" onClick={this.props.handleJurisdictionButton} style={{marginLeft:"5px"}}>USA</button><div id="USlist" style={{display: "none", marginLeft: "10px"}}>{<USAJurisdictionList setJurisdiction={this.props.setJurisdiction}/>}</div>
                </div>
                <button className="search-button" onMouseDown={this.props.setPageBackToOne} onMouseUp={this.props.handleSearchClick}>Search</button>
            </div>
            </div>
        )
    }
}

export default SearchBar;