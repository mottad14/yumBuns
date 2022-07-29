import React from "react";
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';import YumBuns from "../imgs/YumBunsLogo.png"

const NavBar = (props) => {
    return(
    <Navbar bg="light" expand="lg">
                <Link className="navbar-brand mx-3" to="/">  <img className="Logo" src={YumBuns} alt="Logo" /> </Link>
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Nav.Link> <Link className="nav-link active" aria-current="page" to="/">Home</Link> </Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/create">Create a Dish</Link>
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