import React from 'react'
import { Nav, Navbar, } from 'react-bootstrap'
import Home from './Home'
import AboutUs from './AboutUs';
import Contact from './Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


class Header extends React.Component {

    render() {
        return (
            <Router>
                <Navbar bg="dark navbar-dark" expand="lg">
                    <Navbar.Brand>Steele Barber Engineering</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='/about'>About Us</Link>
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                </Switch>

            </Router>
        )
    }

}

export default Header;