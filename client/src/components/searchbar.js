import React, { Component } from 'react';
import JursidictionList from './jurisdictionList.js';
import FieldList from './fieldList.js';

class SearchBar extends Component {
    render() {
        return(
            <React.Fragment>
            <div style={{marginLeft: "12px", marginRight:"12px"}}>
            <div className="d-flex flex-wrap justify-content-between">
                <div> <button type="button" className="btn btn-shadow btn-wide btn-primary">  <span className="btn-icon-wrapper pr-2 opacity-7"> <i className="fa fa-plus fa-w-20"></i> </span> New question </button> </div>
                <button id="order" onMouseEnter={this.props.handleOrderOnEnter} onMouseLeave={this.props.handleOrderOnLeave} onClick={this.props.ordering}>{`${"Relevance ↓" }`}</button>
            </div>
            <div className="d-flex flex-wrap justify-content-between" style={{marginTop:"5px"}}>
                <div className="col-12 col-md-3 p-0 mb-3"> 
                    <input type="text" name="searchWord" className="form-control" placeholder="Search word..." onChange={this.props.handleOnChange} value={this.props.searchWord}/> 
                </div>
                <div className="col-12 col-md-3 p-0 mb-3"> 
                    {<FieldList setField={this.props.setField}/>} 
                </div>
                <div className="col-12 col-md-3 p-0 mb-3" id="jurisdiction"> 
                        <button id="EU" className="jurisdictionList" onClick={this.props.handleJurisdictionButton} style={{marginRight:"5px"}}>EU</button>
                        OR 
                        <button id="USA" className="jurisdictionList" onClick={this.props.handleJurisdictionButton} style={{marginLeft:"5px"}}>USA</button>
                        {<JursidictionList category={this.props.jurisdictionCategory} setJurisdiction={this.props.setJurisdiction}/>}</div>
                <button onMouseDown={this.props.setPageBackToOne} onMouseUp={this.props.handleSearchClick}>Search</button>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;