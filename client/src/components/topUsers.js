import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getTopUsers } from "../actions/users.js";
import UserRow from "./userRow.js"

class TopUsers extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.getTopUsers();
    }

    renderTopUsers = () => {
        console.log(this.props.topUsers)
        return this.props.topUsers.map((u) => {
            return <UserRow username={u.username} avatar={u.avatar} location={u.location} fields={u.fields} upvotes={u.upvotes}/>
        })
    }

    render() { 
        return (<React.Fragment>
            <div class="container mt-100 mb-100">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card"></div>
                        {this.renderTopUsers()}
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({topUsers}) => {
    return {
      topUsers
    }
  }
 
export default connect(mapStateToProps, {getTopUsers})(TopUsers);