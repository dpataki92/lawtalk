import React, { Component } from 'react';
import { connect } from "react-redux";
import  { getCurrentUser } from "../actions/currentUser.js";

class EditProfile extends Component {
    state = {
        id: this.props.match.params.id,
        username: this.props.currentUser.username,
        fields: this.props.currentUser.fields,
        location: this.props.currentUser.location,
        email: this.props.currentUser.email,
        password: "",
        bio: this.props.currentUser.bio
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePageChange = (e) => {
        if (e.target.innerText === "Personal data") {
            e.target.style.display = "none";
            e.target.parentNode.parentNode.querySelector("#bio-link").style.display = "inline";
            document.getElementById("bio-text").style.display = "none";
            document.querySelectorAll(".data-row").forEach((el) => {
                el.style.display = ""
            })
        } else if (e.target.innerText === "Bio") {
            e.target.style.display = "none";
            e.target.parentNode.parentNode.querySelector("#data-link").style.display = "inline";
            document.getElementById("bio-text").style.display = "";
            document.querySelectorAll(".data-row").forEach((el) => {
                el.style.display = "none"
            })
        }
    }

    handleUpdate = (e) => {
        e.preventDefault();
        fetch(`/api/users/${this.state.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`},
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => {
            alert(json.message);
            window.location.reload();
        })
    }

    render() {
        const { currentUser } = this.props;
        return(
            <div className="container rounded bg-white mt-5">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={`/${currentUser.avatar}`} width="90" alt="profile picture"/><span className="font-weight-bold">{currentUser.username}</span><span>{currentUser.location}</span></div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-left back">
                                    <h6 id="data-link" className="edit-page" style={{display: "none"}} onClick={this.handlePageChange}><i className="fa fa-long-arrow-left mr-1 mb-1"/>Personal data</h6>
                                </div>
                                <div className="d-flex flex-row align-items-left back">
                                    <h6 id="bio-link" className="edit-page text-right" style={{display: "inline", marginRight: "3px"}} onClick={this.handlePageChange}><i className="fa fa-long-arrow-right mr-1 mb-1"/>Bio</h6>
                                </div>
                            </div>
                            <div id="bio-text" className="row mt-3" style={{display: "none"}}>
                                <textarea className="form-control" onChange={this.handleChange} name="bio" value={this.state.bio} rows="12" cols="4"/>
                            </div>
                            <div className="row mt-2 data-row">
                                <div className="col-md-6"><input type="text" className="form-control" name="username" onChange={this.handleChange} value={this.state.username}/></div>
                                <div className="col-md-6"><input type="text" className="form-control" name="location" onChange={this.handleChange} value={this.state.location}/></div>
                            </div>
                            <div className="row mt-3 data-row">
                                <div className="col-md-6"><input type="text" className="form-control" name="email" onChange={this.handleChange} value={this.state.email}/></div>
                                <div className="col-md-6"><input type="text" className="form-control" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password..."/></div>
                            </div>
                            <div className="row mt-3 data-row">
                                <div className="col-md-6"><input type="text" className="form-control" name="fields" onChange={this.handleChange} value={this.state.fields}/></div>
                            </div>
                            <div className="mt-5 text-right"><button onClick={this.handleUpdate} className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({ currentUser: state.currentUser })
  }

export default connect(mapStateToProps, { getCurrentUser })(EditProfile);