import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar fluid default collapseOnSelect>
                <Navbar.Header>
                        <Link to="/">
                            <Image  src="assets/logo.png" alt="logo" />
                        </Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventkey={1} componentClass={Link} to="/">
                            HOME
                        </NavItem>
                        <NavItem eventkey={2} componentClass={Link} to="/">
                            PORTFOLIO
                        </NavItem>
                        <NavItem eventkey={3} componentClass={Link} to="/">
                            BLOG
                        </NavItem>
                        <NavItem eventkey={4} componentClass={Link} to="/">
                            ABOUT US
                        </NavItem>
                        <NavItem eventkey={5} componentClass={Link} to="/">
                            CONTACT
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;