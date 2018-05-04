import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View, Row, Col, Card, CardBody, CardImage, CardText, CardTitle, Button, Input } from 'mdbreact';
import { Link,
    withRouter,
} from 'react-router-dom';
//import ButtonReg from './Button';
import './NavbarAlone.css'
import { auth } from '../firebase';
import * as homeRoute from '../pages/appHome';

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
                console.log(INITIAL_STATE);
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


                    <div className='view'>

                        <Mask overlay="indigo-slight" style={{ flexDirection: 'column' }} className="flex-center text-center">
                            <Container className="animated slideInRight">
                                <Row className="mt-5">
                                    <Col className="col-md-8">
                                        <Card>
                                            <CardBody>
                                                <h2 className="mb-5">Login Here</h2>
                                                <form onSubmit={this.onSubmit}>
                                                    <p className="h5 text-center mb-4">Sign in</p>
                                                    <Input icon="envelope" label="Type your email" group type="email" validate error="wrong" success="right" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} />
                                                    <Input icon="lock" label="Type your password" group type="password" validate value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}/>
                                                    <div className="text-center">
                                                        <Button type="submit" disabled={isInvalid}>Login</Button>
                                                    </div>
                                                </form>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col className="col-md-4">
                                        <Card>
                                            <CardBody>
                                                <h2 className="mb-5">Register Here</h2>
                                                <Link to="/register" className="registerBtn"><Button color="danger">Register</Button></Link>
                                            </CardBody>
                                        </Card>
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