import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View, Row, Col, Card, CardBody, CardImage, CardText, CardTitle, Button, input, Jumbotron, } from 'mdbreact';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import { firebase, auth } from '../firebase';
import * as homeRoute from '../pages/appHome';
import AuthUserContext from '../authentication/AuthUserContext';
import './NavbarRegister.css'
import axios from 'axios';

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    userId: '',
    firstName: '',
    lastName: '',
    age: '',
    sex: '',
    phoneNumber: '',
    emergencyContact: '',
    emergencyNumber: '',
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    doctorName: '',
    hospitalChoice: '',
    signInEmail: '',
    signInPassword: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value, })

const RegisterNavbar = withRouter(({ history }) =>
    <div>
        <NavabarEditInfo history={history} />
    </div>
)

class NavabarEditInfo extends React.Component {

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
            userId,
            firstName,
            lastName,
            age,
            sex,
            phoneNumber,
            emergencyContact,
            emergencyNumber,
            medicalHistory,
            currentMedications,
            allergies,
            doctorName,
            hospitalChoice,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({ INITIAL_STATE }));
                axios.post('/createUser',
                    {
                        userId: authUser.user.uid,
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                        age: age,
                        sex: sex,
                        phoneNumber: phoneNumber,
                        emergencyContact: emergencyContact,
                        emergencyNumber: emergencyNumber,
                        medicalHistory: medicalHistory,
                        currentMedications: currentMedications,
                        allergies: allergies,
                        doctorName: doctorName,
                        hospitalChoice: hospitalChoice,
                    },
                )
                    .then(function (response) {
                        history.push(homeRoute.appHome);
                    });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();

    }

    signIn = (event) => {
        const {
            signInEmail,
            signInPassword,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.signInWithEmailAndPassword(signInEmail, signInPassword)
            .then(authUser => {
                this.setState(() => ({ INITIAL_STATE }));
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
            firstName,
            lastName,
            age,
            sex,
            phoneNumber,
            emergencyContact,
            emergencyNumber,
            medicalHistory,
            currentMedications,
            allergies,
            doctorName,
            hospitalChoice,
            signInEmail,
            signInPassword,
            error,
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '';
        const signInInvalid = signInEmail === '' || signInPassword === '';

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
                                                ? <Link className="nav-link" to="/appHome">App</Link>
                                                : <Link className="nav-link" to="/app1">App</Link>
                                            }
                                        </AuthUserContext.Consumer>
                                    </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                    <NavItem>
                                        <form className="form-inline md-form mt-0 text-white" onSubmit={this.signIn}>
                                            <input className="form-control mr-sm-2 mb-3 text-white" label="Type your email" icon="envelope" group type="email" value={signInEmail} onChange={event => this.setState(byPropKey('signInEmail', event.target.value))} />
                                            <input className="form-control mr-sm-2 mb-3 text-white" label="Type your password" icon="lock" group type="password" value={signInPassword} onChange={event => this.setState(byPropKey('signInPassword', event.target.value))} />
                                            <Button size="md" color="danger" disabled={signInInvalid}>Login</Button>
                                        </form>
                                    </NavItem>
                                </NavbarNav>
                            </Collapse>
                        </Container>
                    </Navbar>


                    <Jumbotron className="text-center danger-color lighten-2 white-text z-depth-2 mt-5">
                        <Container>
                            <h1 className="h1-reponsive mb-4 mt-5 white-text font-bold">Edit Information</h1>
                        </Container>
                    </Jumbotron>

                    <Container>
                        <h2 className="mb-5"> Personal Information</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control"></input>
                                        <label for="materialFormRegisterNameEx">First Name</label>
                                    </div>

                                </div>


                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control"></input>
                                        <label for="materialFormRegisterNameEx">Last Name</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-4">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control"></input>
                                        <label for="materialFormRegisterNameEx">Age</label>
                                    </div>

                                </div>


                                <div className="col-md-4">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control"></input>
                                        <label for="materialFormRegisterNameEx">Sex</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-envelope prefix"></i>
                                        <input type="email" id="materialFormRegisterEmailEx" className="form-control"></input>
                                        <label for="materialFormRegisterEmailEx">Your email</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-lock prefix"></i>
                                        <input type="password" id="materialFormRegisterPasswordEx" className="form-control"></input>
                                        <label for="materialFormRegisterPasswordEx">Your password</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-lock prefix"></i>
                                        <input type="password" id="materialFormRegisterPasswordEx" className="form-control"></input>
                                        <label for="materialFormRegisterPasswordEx">Your password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-phone prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control"></input>
                                        <label for="materialFormRegisterNameEx">Phone Number</label>
                                    </div>
                                </div>

                            </div>
                            <h2 className="mt-5 mb-5">Medical Information</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix"></i>
                                        <textarea type="text" id="textareaPrefix" className="form-control md-textarea" rows="3"></textarea>
                                        <label for="textareaPrefix">Medical History</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix"></i>
                                        <textarea type="text" id="textareaPrefix" className="form-control md-textarea" rows="3"></textarea>
                                        <label for="textareaPrefix">Current Medications</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix"></i>
                                        <textarea type="text" id="textareaPrefix" className="form-control md-textarea" rows="3"></textarea>
                                        <label for="textareaPrefix">Allergies</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-medkit prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control"></input>
                                        <label for="inputMDEx">Physician's Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-medkit prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control"></input>
                                        <label for="inputMDEx">Hospital of choice</label>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-5">Emergency Contact Information</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control"></input>
                                        <label for="inputMDEx">First/Last Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-phone prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control"></input>
                                        <label for="inputMDEx">Phone Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    {/* <Link to="/appHome" className="submitBtn"> */}<Button color="danger" size="lg" type="submit" disabled={isInvalid}>Save</Button>{/* </Link> */}
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

export default withRouter(NavabarEditInfo);