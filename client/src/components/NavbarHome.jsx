import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View, Row, Col, Card, CardBody, CardImage, CardText, CardTitle, Button, Input } from 'mdbreact';
import { Link } from 'react-router-dom';
//import ButtonReg from './Button';
import './NavbarHome.css'
import AuthUserContext from '../AuthUserContext'

class NavbarHome extends React.Component {
 

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        //const view = { background: 'url("https://images.unsplash.com/photo-1507105306461-47f75f2da3aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3a9226dabffa306b261ea52c55cc954&auto=format&fit=crop&w=1950&q=80")no-repeat center center', backgroundSize: 'cover', height: '100vh', marginTop: '-56px' }
        return (
            <div>
                <header>

                    <Navbar color="unique-color" dark expand="md" fixed="top" scrolling className="mb-4">
                        <Container>
                            <NavbarBrand href="/">
                                <strong>INTELLIGENT APP MASTERS</strong>
                            </NavbarBrand>
                            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                            <Collapse isOpen={this.state.collapse} navbar>
                                <NavbarNav left>
                                    <NavItem>
                                        <Link className="nav-link" to="/">Home</Link>
                                    </NavItem>
                                    <NavItem active>
                                        <AuthUserContext.Consumer>
                                            {authUser => authUser
                                            ?<Link className="nav-link" to="/appHome">App</Link>
                                            :<Link className="nav-link" to="/app1">App</Link>
                                            }
                                        </AuthUserContext.Consumer>
                                    </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                    <NavItem>
                                        <NavLink to="https://github.com/BrandonM25/Emergency-Central-Final"><Fa icon="github" /></NavLink>
                                    </NavItem>
                                </NavbarNav>
                            </Collapse>
                        </Container>
                    </Navbar>


                    <div className='view'>

                        <Mask overlay="indigo-slight" style={{ flexDirection: 'column' }} className="flex-center text-center">
                            <Container className="animated slideInRight">
                                <Row className="mt-5">
                                    <Col className="col-md-4">

                                    </Col>
                                    <Col className="col-md-4">
                                    <div className="emerbtn"><h1>CALL 911</h1></div>
                                    </Col>
                                    <Col className="col-md-4">

                                    </Col>
                                </Row>
                            </Container>
                        </Mask>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavbarHome;