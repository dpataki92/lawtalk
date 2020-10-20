import React, { Component  } from 'react';
import UserRow from "./userRow.js";
import '../../TopUsers.css';
import { connect } from "react-redux";
import  { getTopUsers } from "../../actions/users.js";
import { Link } from 'react-router-dom';



class TopUsers extends Component {

    componentDidMount() {
        this.props.getTopUsers()
    }

    render() { 

        const renderTopUsers = this.props.topUsers.map((u, id)=> {
            return <Link to={`/users/${u.id}`}><UserRow key={id} username={u.username} avatar={u.avatar} location={u.location} fields={u.fields} upvotes={u.upvotes}/></Link> 
        })

        return (
            <React.Fragment>
            <div className="container mt-100 mb-100">
                <h2 style={{marginBottom: "5px"}}>Top users</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card"></div>
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