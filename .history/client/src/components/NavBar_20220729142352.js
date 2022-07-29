import React from "react";
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import YumBuns from "../imgs/YumBunsLogo.png"

const NavBar = (props) => {
    return(
            <nav className="navbar navbar-expand-lg bg-light mb-3">
                <Link className="navbar-brand mx-3" to="/">  <img className="Logo" src={YumBuns} alt="Logo" /> </Link>
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Nav.Link> <Link className="nav-link btn-outline-warning" aria-current="page" to="/">Home</Link> </Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link> <Link className="nav-link btn-outline-warning" to="/create">Create a Dish</Link> </Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link> <Link className="nav-link d-flex mx-3 btn-outline-warning" to="/login"> Log In</Link> </Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link onClick={() => props.setTrigger(false)}> <Link onClick={() => props.setTrigger(true)} className="nav-link d-flex mx-3 btn-outline-warning" to="/signUp"> Sign Up</Link> </Nav.Link>
                    </li>
                </ul>
                <form className="d-flex mx-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
    )
}

export default NavBar;