import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Container, Mask, Row, Col, Card, CardBody, Button, Input } from 'mdbreact';
import {
    Link,
    withRouter,
} from 'react-router-dom';
//import ButtonReg from './Button';
import './NavbarAlone.css'
import { auth } from '../firebase';
import * as homeRoute from '../pages/appHome';
import AuthUserContext from '../authentication/AuthUserContext';

const superNavbar = withRouter(({ history }) =>
    <div>
        <NavbarWithIntro history={history} />
    </div>
)

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value, })

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class NavbarWithIntro extends React.Component {


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

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.signInWithEmailAndPassword(email, password)
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
        //const view = { background: 'url("https://images.unsplash.com/photo-1507105306461-47f75f2da3aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3a9226dabffa306b261ea52c55cc954&auto=format&fit=crop&w=1950&q=80")no-repeat center center', backgroundSize: 'cover', height: '100vh', marginTop: '-56px' }

        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid = password === '' || email === '';

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
                                        <form className="form-inline md-form mt-0 text-white" onSubmit={this.onSubmit}>
                                            <Input className="form-control mr-sm-2 mb-3 text-white"label="Type your email" icon="envelope" group type="email" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}/>
                                            <Input className="form-control mr-sm-2 mb-3 text-white"label="Type your password" icon="lock" group type="password" value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}/>
                                            <Button size="md"color="danger" type="submit" disabled={isInvalid}>Login</Button>
                                        </form>
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
                                        <Card>
                                            <CardBody>
                                                <h2 className="mb-5">Register Here</h2>
                                                <Link to="/register" className="registerBtn"><Button color="danger">Register</Button></Link>
                                            </CardBody>
                                        </Card>
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

export default withRouter(superNavbar);