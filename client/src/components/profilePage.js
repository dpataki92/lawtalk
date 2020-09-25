import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCurrentProfile } from '../actions/currentProfile.js';

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        props.getCurrentProfile(props.match.params.id);
    }

    render() {
        const {currentProfile} = this.props
        return(
            <div className="container emp-profile" style={{marginTop:"-15px"}}>
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={`/${currentProfile.avatar}`} alt="profile picture"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {currentProfile.username}
                                    </h5>
                                    <h6 style={{marginBottom:"15px"}}>
                                        {currentProfile.location}
                                    </h6>
                                    <p class="proile-rating" style={{marginBottom:"15px"}}>UPVOTE/DOWNVOTE : <span>{currentProfile.voteRatio}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Bio</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>TOP RATED ANSWERS</p>
                            <a href="">{currentProfile.answer1}</a><br/>
                            <a href="">{currentProfile.answer2}</a><br/>
                            <a href="">{currentProfile.answer3}</a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Fields</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.fields}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Upvotes</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.upvotes}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Downvotes</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.downvotes}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Member since</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.memberSince}</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                                        <div className="row" >
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </form>           
        </div>
        )
    }
}

const mapStateToProps = state => {
    return ({ currentProfile: state.currentProfile })
  }
  
export default connect(mapStateToProps, { getCurrentProfile })(ProfilePage);