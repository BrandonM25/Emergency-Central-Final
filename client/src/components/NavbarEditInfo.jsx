import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Container, Button, input, Jumbotron, } from 'mdbreact';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import { firebase, auth } from '../firebase';
import * as homeRoute from '../pages/appHome';
import AuthUserContext from '../authentication/AuthUserContext';
//import './NavbarRegister.css'
import './NavbarEditInfo.css'
import axios from 'axios';

const INITIAL_STATE = {
    email: '',
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
    editMode: '',
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
            ...INITIAL_STATE
        };
        this.onClick = this.onClick.bind(this);
        this.edit = this.edit.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    onSubmit = (event) => {
        const {
            email,
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

        axios.post('/updateInfo',
            {
                id: firebase.auth.currentUser.uid,
                user: {
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
                }
            }
        ).then(function (response) {
            console.log("I'm here");
            history.push(homeRoute.appHome);
        });

        event.preventDefault();

    }

    edit() {
        this.setState({ editMode: "edit" })
    };

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

    componentDidMount() {
        const superThis = this;
        firebase.auth.onAuthStateChanged(function (user) {
            console.log(user.uid);
            axios.post('/getInfo',
                { id: user.uid }).then(function (response) {
                    const data = response.data
                    console.log(superThis.state);
                    console.log(data);
                    superThis.setState({
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        age: String(data.age),
                        sex: data.sex,
                        phoneNumber: data.phoneNumber,
                        emergencyContact: data.emergencyContact,
                        emergencyNumber: data.emergencyNumber,
                        medicalHistory: data.medicalHistory,
                        currentMedications: data.currentMedications,
                        allergies: data.allergies,
                        doctorName: data.doctorName,
                        hospitalChoice: data.hospitalChoice,
                    }, () => {
                        console.log(superThis.state);
                    })
                })
        });
    }


    render() {
        //const view = { background: 'url("https://images.unsplash.com/photo-1507105306461-47f75f2da3aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3a9226dabffa306b261ea52c55cc954&auto=format&fit=crop&w=1950&q=80")no-repeat center center', backgroundSize: 'cover', height: '100vh', marginTop: '-56px' }


        // const {
        //     email,
        //     passwordOne,
        //     passwordTwo,
        //     firstName,
        //     lastName,
        //     age,
        //     sex,
        //     phoneNumber,
        //     emergencyContact,
        //     emergencyNumber,
        //     medicalHistory,
        //     currentMedications,
        //     allergies,
        //     doctorName,
        //     hospitalChoice,
        //     signInEmail,
        //     signInPassword,
        //     editMode,
        //     error,
        // } = this.state;

        const isInvalid = this.state.email === '' || this.state.firstName === '' || this.state.lastName === '' || this.state.age === '' ||
            this.state.sex === '' || this.state.phoneNumber === '' || this.state.emergencyContact === '' ||
            this.state.emergencyNumber === '' || this.state.medicalHistory === '' || this.state.currentMedications === '' ||
            this.state.allergies === '' || this.state.doctorName === '' || this.state.hospitalChoice === '' || this.state.editMode === '';
        const signInInvalid = this.state.signInEmail === '' || this.state.signInPassword === '';
        const isNotEditMode = this.state.editMode === '';

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
                                        <AuthUserContext.Consumer>
                                            {authUser => authUser
                                                ? <Button size="md" color="danger" onClick={this.signOut}>Sign Out</Button>
                                                : <form className="form-inline md-form mt-0 text-white" onSubmit={this.signIn}>
                                                    <input className="form-control mr-sm-2 mb-3 text-white" label="Type your email" icon="envelope" group type="email" value={this.state.signInEmail} onChange={event => this.setState(byPropKey('signInEmail', event.target.value))} />
                                                    <input className="form-control mr-sm-2 mb-3 text-white" label="Type your password" icon="lock" group type="password" value={this.state.signInPassword} onChange={event => this.setState(byPropKey('signInPassword', event.target.value))} />
                                                    <Button size="md" color="danger" disabled={signInInvalid}>Login</Button>
                                                </form>
                                            }
                                        </AuthUserContext.Consumer>
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
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control" disabled={isNotEditMode} value={this.state.firstName} onChange={event => this.setState(byPropKey('firstName', event.target.value))}></input>
                                        <label  classname="label" for="materialFormRegisterNameEx">First Name</label>
                                    </div>

                                </div>


                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control" disabled={isNotEditMode} value={this.state.lastName} onChange={event => this.setState(byPropKey('lastName', event.target.value))}></input>
                                        <label classname="label" for="materialFormRegisterNameEx">Last Name</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-4">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control" disabled={isNotEditMode} value={this.state.age} onChange={event => this.setState(byPropKey('age', event.target.value))}></input>
                                        <label classname="label" for="materialFormRegisterNameEx">Age</label>
                                    </div>

                                </div>


                                <div className="col-md-4">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control" disabled={isNotEditMode} value={this.state.sex} onChange={event => this.setState(byPropKey('sex', event.target.value))}></input>
                                        <label classname="label" for="materialFormRegisterNameEx">Sex</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-envelope prefix"></i>
                                        <input type="email" id="materialFormRegisterEmailEx" className="form-control" disabled={isNotEditMode} value={this.state.email} onChange={event => this.setState(byPropKey('email', event.target.value))}></input>
                                        <label classname="label" for="materialFormRegisterEmailEx">Your email</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-phone prefix"></i>
                                        <input type="text" id="materialFormRegisterNameEx" className="form-control" disabled={isNotEditMode} value={this.state.phoneNumber} onChange={event => this.setState(byPropKey('phoneNumber', event.target.value))}></input>
                                        <label classname="label" for="materialFormRegisterNameEx">Phone Number</label>
                                    </div>
                                </div>

                            </div>
                            <h2 className="mt-5 mb-5">Medical Information</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix"></i>
                                        <textarea type="text" id="textareaPrefix" className="form-control md-textarea" rows="3" disabled={isNotEditMode} value={this.state.medicalHistory} onChange={event => this.setState(byPropKey('medicalHistory', event.target.value))}></textarea>
                                        <label classname="label" for="textareaPrefix">Medical History</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix"></i>
                                        <textarea type="text" id="textareaPrefix" className="form-control md-textarea" rows="3" disabled={isNotEditMode} value={this.state.currentMedications} onChange={event => this.setState(byPropKey('currentMedications', event.target.value))}></textarea>
                                        <label classname="label" for="textareaPrefix">Current Medications</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix"></i>
                                        <textarea type="text" id="textareaPrefix" className="form-control md-textarea" rows="3" disabled={isNotEditMode} value={this.state.allergies} onChange={event => this.setState(byPropKey('allergies', event.target.value))}></textarea>
                                        <label classname="label" for="textareaPrefix">Allergies</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-medkit prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control" disabled={isNotEditMode} value={this.state.doctorName} onChange={event => this.setState(byPropKey('doctorName', event.target.value))}></input>
                                        <label classname="label" for="inputMDEx">Physician's Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-medkit prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control" disabled={isNotEditMode} value={this.state.hospitalChoice} onChange={event => this.setState(byPropKey('hospitalChoice', event.target.value))}></input>
                                        <label classname="label" for="inputMDEx">Hospital of choice</label>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mt-5 mb-5">Emergency Contact Information</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-user prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control" disabled={isNotEditMode} value={this.state.emergencyContact} onChange={event => this.setState(byPropKey('emergencyContact', event.target.value))}></input>
                                        <label classname="label" for="inputMDEx">First/Last Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form">
                                        <i className="fa fa-phone prefix"></i>
                                        <input type="text" id="inputMDEx" className="form-control" disabled={isNotEditMode} value={this.state.emergencyNumber} onChange={event => this.setState(byPropKey('emergencyNumber', event.target.value))}></input>
                                        <label classname="label" for="inputMDEx">Phone Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    {/* <Link to="/appHome" className="submitBtn"> */}<Button color="danger" size="lg" type="submit" disabled={isInvalid}>Save</Button>{/* </Link> */}
                                    <Button color="danger" size="lg" onClick={this.edit}>Edit</Button>
                                    {this.state.error && <p>{this.state.error.message}</p>}
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