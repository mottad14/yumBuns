import React from "react";
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import YumBuns from "../imgs/YumBunsLogo.png"

const NavBar = (props) => {

    
  return (props.loggedIn) ? (
    // If user is passed in as being Logged in via props then nav bar with Account and Log out info displays, 
    // if user is not logged in, navbar with subscription and log in links are pushed in.
    <nav className="navbar navbar-expand-sm bg-light mb-3">
        <h1>THIS IS OUR LOGGED IN NAV BAR</h1>
                <Link className="navbar-brand mx-3" to="/">  <img className="Logo" src={YumBuns} alt="Logo" /> </Link>
               
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Nav.Link> <Link className="nav-link btn-outline-warning" aria-current="page" to="/">Home</Link> </Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link> <Link className="nav-link d-flex mx-3 btn-outline-warning" to="/account"> Log In</Link> </Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link>  <Link className="nav-link d-flex mx-3 btn-outline-warning" to="/signup">    <p> Sign Up </p>    </Link> </Nav.Link>
                    </li>
                </ul>
                <form className="d-flex mx-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>
    )
    : 
    
    <nav className="navbar navbar-expand-sm bg-light mb-3">
        <h1> THIS IS A NOT LOGGED IN NAV BAR </h1>
                <Link className="navbar-brand mx-3" to="/">  <img className="Logo" src={YumBuns} alt="Logo" /> </Link>
               
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
                    <Nav.Link>  <Link className="nav-link d-flex mx-3 btn-outline-warning" to="/signup">    <p> Sign Up </p>    </Link> </Nav.Link>
                    </li>
                </ul>
                <form className="d-flex mx-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>;
}

export default NavBar;