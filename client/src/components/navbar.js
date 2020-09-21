import React, { Component } from 'react';

const Navbar = props => {

    const handleLogout = (e) => {
        e.preventDefault();
        alert("Are you sure?");
        props.logout();
    }

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid"> <button class="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar20">
                    <p class="navbar-brand text-white mb-0"> <i class="fa d-inline fa-lg fa-stop-circle"></i> LAWTALK </p>
                </button>
                <div class="collapse navbar-collapse" id="navbar20">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"> <a class="nav-link" href="#" onMouseDown={props.setFollowed} onMouseUp={props.handleSearchClick}>My questions</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#">All questions</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#">Top users</a> </li>
                    </ul>
                    <p class="d-none d-md-block lead mb-0 text-white"> <i class="fa d-inline fa-lg fa-stop-circle"></i> <b> LAWTALK</b> </p>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-1"> <a class="nav-link" href="#" > <i class="fa fa-edit fa-fw fa-lg"></i> </a> </li>
                        <li class="nav-item mx-1"> <a class="nav-link" href="#" onClick={handleLogout}> <i class="fa fa-sign-out fa-fw fa-lg"></i> </a> </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;