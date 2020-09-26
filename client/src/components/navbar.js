import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    const handleLogout = (e) => {
        e.preventDefault();
        alert("Are you sure?");
        props.logout();
    }

    const handleReload = () => {
        window.location.reload(false);
    }

    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid"> <button className="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar20">
                    <p className="navbar-brand text-white mb-0"> LAWTALK </p>
                </button>
                <div className="collapse navbar-collapse" id="navbar20">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <NavLink className="nav-link" to="/questions/all">All questions</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/questions/followed">My questions</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/users/top">Top users</NavLink> </li>
                    </ul>
                    <p className="d-none d-md-block lead mb-0 text-white"> <b onClick={handleReload}> LAWTALK</b> </p>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-1"> <a className="nav-link" href="#" > <i className="fa fa-edit fa-fw fa-lg"></i> </a> </li>
                        <li className="nav-item mx-1"> <a className="nav-link" href="#" onClick={handleLogout}> <i className="fa fa-sign-out fa-fw fa-lg"></i> </a> </li>

                    </ul>
                </div>
            </div>
        </nav>
        <br></br>
        </React.Fragment>
    )
}

export default Navbar;