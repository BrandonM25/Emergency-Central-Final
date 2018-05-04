import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View, Row, Col, Card, CardBody, CardImage, CardText, CardTitle, Button, Input, Jumbotron, } from 'mdbreact';
import { Link, 
    withRouter, 
} from 'react-router-dom';
import { auth } from '../firebase';
import * as homeRoute from '../pages/appHome';
//import './Navbar.css'

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value, })

const RegisterNavbar = withRouter(({history}) =>
<div>
    <NavbarRegister history={history} />
</div>
)

class NavbarRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            INITIAL_STATE
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    onSubmit = (event) => {
        const {
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.createUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            console.log(INITIAL_STATE);
            this.setState(() => ({INITIAL_STATE}));
            history.push(homeRoute.appHome);
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });

        event.preventDefault();
    }


    render() {
        const view = { background: 'url("https://images.unsplash.com/photo-1507105306461-47f75f2da3aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3a9226dabffa306b261ea52c55cc954&auto=format&fit=crop&w=1950&q=80")no-repeat center center', backgroundSize: 'cover', height: '100vh', marginTop: '-56px' }
        
        const {
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '';
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
                                    <NavItem active>
                                        <Link className="nav-link" to="/app1">App</Link>
                                    </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                    <NavItem>
                                        <NavLink to="#"><Fa icon="github" /></NavLink>
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
                        <form onSubmit={this.onSubmit}>
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
                                    <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}/>
                                </div>


                                <div className="col-md-6">
                                    <Input label="Type your password" icon="lock" group type="password" validate value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}/>
                                </div>

                                <div className="col-md-6">
                                    <Input label="Confirm your password" icon="lock" group type="password" validate value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}/>
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
                                    {/* <Link to="/appHome" className="submitBtn"> */}<Button color="danger" size="lg" type="submit" disabled={isInvalid}>Submit</Button>{/* </Link> */}
                                    {error && <p>{error.message}</p>}
                                </div>
                            </div>
                        </form>
                    </Container>
                </header>
            </div>
        );
    }
}

export default withRouter(RegisterNavbar);