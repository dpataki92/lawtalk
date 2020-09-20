import React, { Component } from 'react';
import EUJurisdictionList from './euJurisdictionList.js';
import USAJurisdictionList from './usaJurisdictionList.js';


class JursidictionList extends Component {

    render() {
        return(
            <React.Fragment>
                {(this.props.category === "EU") ? <EUJurisdictionList /> : null}
                {(this.props.category === "USA") ? <USAJurisdictionList /> : null}
            </React.Fragment>
        )
    }
}

export default JursidictionList;