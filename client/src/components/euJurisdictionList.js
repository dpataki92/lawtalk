import React, { Component } from 'react';

const EUJurisdictionList = (props) => {

    return(
        <select id="EUcountries" name="jurisdiction" onChange={e=>props.setJurisdiction(e.target.value)}>
            <option value="" disabled selected>Choose country...</option>
            <option value="Austria">Austria</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Belgium">Belgium</option>
            <option value="Croatia">Croatia</option>
            <option value="Republic of Cyprus">Republic of Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Estonia">Estonia</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Hungary">Hungary</option>
            <option value="Ireland">Ireland</option>
            <option value="Italy">Italy</option>
            <option value="Latvia">Latvia</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Malta">Malta</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Romania">Romania</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
        </select>
        )
    }

export default EUJurisdictionList;