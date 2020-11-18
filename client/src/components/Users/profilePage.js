import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCurrentProfile } from '../../actions/currentProfile.js';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {

    componentDidMount() {
        this.props.getCurrentProfile(this.props.match.params.id);
    }

    handleClick = (e) => {
        if (e.target.id === "bio-tab" && !e.target.classList.contains("active")) {
            e.target.classList = "nav-link active";
            document.getElementById("about-tab").classList = "nav-link";
            document.getElementById("about").classList = "tab-pane fade";
            document.getElementById("bio").classList = "tab-pane fade show active";
        } else if (e.target.id === "about-tab" && !e.target.classList.contains("active")) {
            e.target.classList = "nav-link active";
            document.getElementById("bio-tab").classList = "nav-link";
            document.getElementById("bio").classList = "tab-pane fade";
            document.getElementById("about").classList = "tab-pane fade show active";

        }
    }

    render() {
        const {currentProfile} = this.props
        return(
            <div className="container emp-profile" style={{marginTop:"-15px"}}>
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img" style={{height: "250", width: "300px", overflow: "hidden"}}>
                            <img style={{height: "250px", objectFit: "cover"}} src={`/${currentProfile.avatar}`} alt="profile picture"/>
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
                                <p className="profile-conversation"><Link><i className="fa fa-comments"></i> Start conversation</Link></p>
                                <p className="profile-rating">UPVOTE/DOWNVOTE : <span>{currentProfile.voteRatio}</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" onClick={this.handleClick} id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.handleClick} id="bio-tab" data-toggle="tab" href="#bio" role="tab" aria-controls="profile" aria-selected="false">Bio</a>
                                    </li>
                                </ul>
                        </div>
                    </div>

                </div >
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>TOP RATED ANSWERS</p>
                            <Link to={currentProfile.answer1QuestionId ? `/questions/${currentProfile.answer1QuestionId}` : "#"}>{currentProfile.answer1}</Link><br/>
                            <Link to={`/questions/${currentProfile.answer2QuestionId}`}>{currentProfile.answer2}</Link><br/>
                            <Link to={`/questions/${currentProfile.answer3QuestionId}`}>{currentProfile.answer3}</Link>
                        </div>
                    </div>
                    <div className="col-md-8" style={{marginTop:"35px"}}>
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab" style={{marginTop: "-80px"}}>
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
                                                <label>Created questions</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.createdQuestions}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Answers</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.answers}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Comments</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{currentProfile.comments}</p>
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
                            <div className="tab-pane fade" id="bio" aria-labelledby="profile-tab" >
                                    <p style={{marginTop:"-70px", fontWeight:"normal"}}>{currentProfile.bio ? currentProfile.bio : "No bio has been provided by the user"}</p>
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