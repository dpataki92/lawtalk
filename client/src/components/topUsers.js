import React, { Component, PropTypes  } from 'react';
import UserRow from "./userRow.js";
import '../TopUsers.css';
import { connect } from "react-redux";
import  { getTopUsers } from "../actions/users.js";


class TopUsers extends Component {

    componentDidMount() {
        this.props.getTopUsers()
        console.log(this.props.topUsers)
    }

    render() { 

        const renderTopUsers = this.props.topUsers.map((u, id)=> {
            console.log(this.props.topUsers)
            return <UserRow key={id} username={u.username} avatar={u.avatar} location={u.location} fields={u.fields} upvotes={u.upvotes}/>
        })

        return (<React.Fragment>
            <div class="container mt-100 mb-100">
                <h2 style={{marginBottom: "5px"}}>Top users</h2>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card"></div>
                        {renderTopUsers}
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return ({ topUsers: state.topUsers })
  }
 
export default connect(mapStateToProps, {getTopUsers})(TopUsers);