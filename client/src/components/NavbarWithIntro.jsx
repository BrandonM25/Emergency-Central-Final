import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View, Row, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
//import './Navbar.css'

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
  render() {
    const view = { background: 'url("https://images.unsplash.com/photo-1507105306461-47f75f2da3aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3a9226dabffa306b261ea52c55cc954&auto=format&fit=crop&w=1950&q=80")no-repeat center center', backgroundSize: 'cover', height: '100vh', marginTop: '-56px' }
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


          <View style={view}>

            <Mask overlay="indigo-slight" style={{ flexDirection: 'column' }} className="flex-center text-right">
              <Container className="animated slideInRight">
                <h1 className="font-weight-bold text-white">EMERGENCY <a className="central">CENTRAL</a></h1>
                <h5 className="font-weight-bold text-white">A ONE CLICK APP THAT WILL ALLOW YOU TO CONTACT EMERGENCY SERVICES</h5>
                <Link to="#">
                <Button size="lg" color="danger">Learn More</Button>
                </Link>
              </Container>
            </Mask>
          </View>
        </header>
      </div>
    );
  }
}

export default NavbarWithIntro;