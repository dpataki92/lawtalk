import React, { Component } from 'react';
import EUJusrisdictionList from 'euJursidictionList.js';
import USAJusrisdictionList from 'euJursidictionList.js';


class JursidictionList extends Component {

    handleOnClick = (e) => {
        e.preventDefault();
        let jurisdictionDiv = document.getElementById("jurisdiction");
        let jurisdiction = jurisdictionDiv.id;
        jurisdictionDiv.innerHTML = "";
        if (jurisdiction === "EU") {
            return EUJusrisdictionList
        } else if (jurisdiction === "USA") {
            return USAJusrisdictionList
        }
    }   

    render() {
        return(
            <div id="jurisdiction" className="col-12 col-md-3 p-0 mb-3">
                <button id="EU" className="jurisdictionList" onClick={this.handleOnClick}>EU</button>
                OR
                <button id="USA" className="jurisdictionList" onClick={this.handleOnClick}>USA</button>
            </div>
        )
    }
}

export default JursidictionList;