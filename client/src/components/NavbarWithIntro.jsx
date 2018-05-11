import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Container, Mask, Button, Input } from 'mdbreact';
import { Link,
        withRouter, } from 'react-router-dom';
import { auth } from '../firebase';
import AuthUserContext from '../authentication/AuthUserContext';
import * as trueHome from '../pages/home';
import * as homeRoute from '../pages/appHome';
import './NavbarRegister.css'

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
    this.signOut = this.signOut.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  signOut() {
    const {
      email,
      password,
  } = this.state;

    const {
      history,
      } = this.props;
  
    auth.signOut();
    history.push(trueHome.trueHome);
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

          <Navbar color="unique-color" dark expand="md" fixed="top" scrolling>
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
                    <AuthUserContext.Consumer>
                        {authUser => authUser
                        ?<Button size="md"color="danger" onClick={this.signOut}>Sign Out</Button>
                        :<form className="form-inline md-form mt-0 text-white" onSubmit={this.onSubmit}>
                          <Input className="form-control mr-sm-2 mb-3 text-white" label="Type your email" icon="envelope" group type="email" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}/>
                          <Input className="form-control mr-sm-2 mb-3 text-white" label="Type your password" icon="lock" group type="password" value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}/>
                          <Button size="md"color="danger" type="submit" disabled={isInvalid}>Login</Button>
                        </form>
                        }
                    </AuthUserContext.Consumer>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>


          <div className="view">

            <Mask overlay="indigo-slight" style={{ flexDirection: 'column' }} className="flex-center text-right">
              <Container className="animated slideInRight">
                <h1 className="font-weight-bold text-white">EMERGENCY <a className="central">CENTRAL</a></h1>
                <h5 className="font-weight-bold text-white">A ONE CLICK APP THAT WILL ALLOW YOU TO CONTACT EMERGENCY SERVICES</h5>
                <Link to="#about">
                  <Button size="lg" color="danger">Learn More</Button>
                </Link>
              </Container>
            </Mask>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(superNavbar);