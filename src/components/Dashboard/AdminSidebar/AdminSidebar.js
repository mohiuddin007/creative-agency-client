import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar d-flex flex-column py-5 px-4" >
            <Link to="/">
                <img src={logo} className="mx-auto d-block logoSize" alt="logo"/>
            </Link>
            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/allServiceList" className="nav-link text-dark">
                        <FontAwesomeIcon icon={faClipboardList} /> <span>All Services List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="nav-link text-dark">
                        <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="nav-link text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /><span>Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;