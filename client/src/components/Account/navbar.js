import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0} from '@auth0/auth0-react';

const Navbar = props => {

    const { logout } = useAuth0();

    const handleSocialLogout = () => {
        logout();
        props.logout();
    }

    const handleClickOnTitle = () => {
        let homePageLink = document.getElementById("followed-link");
        homePageLink.click();
    }

    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid"> 
                <button className="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar20">
                    <p className="navbar-brand text-white mb-0"> LAWTALK </p>
                </button>
                <div className="collapse navbar-collapse" id="navbar20">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <NavLink id="followed-link" className="nav-link" to="/questions/followed">My questions</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/questions/all">All questions</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to={`/users/${props.id}/messages`}>Messages</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/users/top">Top users</NavLink> </li>
                    </ul>
                    <p className="d-none d-md-block lead mb-0 text-white"> <b style={{cursor: 'pointer'}} onClick={handleClickOnTitle}> LAWTALK</b> </p>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-1"> <NavLink className="nav-link" to={`/users/${props.id}/edit`}> <i className="fa fa-edit fa-fw fa-lg"></i> </NavLink> </li>
                        <li className="nav-item mx-1"> <NavLink id="logout" className="nav-link" to="/" onClick={localStorage.getItem('social') === "true" ? handleSocialLogout : props.logout}> <i className="fa fa-sign-out fa-fw fa-lg"></i> </NavLink> </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br></br>
        </React.Fragment>
    )
}

export default Navbar;