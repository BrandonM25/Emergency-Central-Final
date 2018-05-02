import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View, Row, Col, Card, CardBody, CardImage, CardText, CardTitle, Button, Input, Jumbotron, } from 'mdbreact';
import { Link } from 'react-router-dom';
//import './Navbar.css'

class NavbarRegister extends React.Component {

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
        const view = { background: 'url("https://images.unsplash.com/photo-1507105306461-47f75f2da3aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3a9226dabffa306b261ea52c55cc954&auto=format&fit=crop&w=1950&q=80")no-repeat center center', backgroundSize: 'cover', height: '100vh', marginTop: '-56px' }
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
                                    <NavItem active>
                                        <Link className="nav-link" to="/">Home</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to="/app1">App</Link>
                                    </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                    <NavItem>
                                        <NavLink to="#"><Fa icon="linkedin" /></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#"><Fa icon="github" /></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#"><Fa icon="facebook" /></NavLink>
                                    </NavItem>
                                </NavbarNav>
                            </Collapse>
                        </Container>
                    </Navbar>


                    <Jumbotron className="text-center danger-color lighten-2 white-text z-depth-2 mt-5">
                        <Container>
                            <h1 className="h1-reponsive mb-4 mt-2 white-text font-bold">Registration Form</h1>
                        </Container>
                    </Jumbotron>

                    <Container>
                        <h2 className="mb-5"> Personal Information</h2>
                        <form>
                            <div className="row">

                                <div className="col-md-6">
                                    <Input label="First name" icon="user" />
                                </div>


                                <div className="col-md-6">
                                    <Input label="Last Name" icon="user" />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-4">
                                    <Input label="Age" icon="user" />
                                </div>


                                <div className="col-md-4">
                                    <Input label="Sex" icon="user" />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                                </div>


                                <div className="col-md-6">
                                <Input label="Type your password" icon="lock" group type="password" validate/>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <Input label="Phone Number" icon="phone" />
                                </div>

                            </div>
                            <h2 className="mt-5 mb-5">Medical Information</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <Input type="textarea" label="Medical History" icon="pencil" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Input type="textarea" label="Current Medications" icon="pencil" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Input type="textarea" label="Allergies" icon="pencil" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Input type="textarea" label="Physician's Name" icon="medkit" />
                                </div>
                                <div className="col-md-6">
                                    <Input type="textarea" label="Hospital of Choice" icon="medkit" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                <Button color="danger" size="lg">Submit</Button>
                                </div>
                            </div>
                        </form>


                    </Container>
                </header>
            </div >
        );
    }
}

export default NavbarRegister;