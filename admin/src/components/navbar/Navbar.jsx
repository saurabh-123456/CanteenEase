import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const admin = useSelector((state)=> state.getAdmin).admin;

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">CanteenConnect</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/orders">Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"  to= "/availablility">Available</Link>
                            </li>
                        </ul>
                        {!admin.authtoken? <a className="btn btn-primary mx-2" href="/login" role="button">Login</a>: 
                        <a className="btn btn-primary mx-2" href="/profile" role="button">Profile</a> }
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
