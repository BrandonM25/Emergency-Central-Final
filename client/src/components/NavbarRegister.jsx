import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Fa,
  Container,
  Mask,
  View,
  Row,
  Col,
  Card,
  CardBody,
  CardImage,
  CardText,
  CardTitle,
  Button,
  Input,
  Jumbotron
} from "mdbreact";
import { Link } from "react-router-dom";
//import './Navbar.css'

class NavbarWithIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    const view = {
      background:
        'url("https://images.unsplash.com/photo-1507105306461-47f75f2da3aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3a9226dabffa306b261ea52c55cc954&auto=format&fit=crop&w=1950&q=80")no-repeat center center',
      backgroundSize: "cover",
      height: "100vh",
      marginTop: "-56px"
    };
    return (
      <div>
        <header>
          <Navbar
            color="unique-color"
            dark
            expand="md"
            fixed="top"
            scrolling
            className="mb-4"
          >
            <Container>
              <NavbarBrand href="/">
                <strong>INTELLIGENT APP MASTERS</strong>
              </NavbarBrand>
              {!this.state.isWideEnough && (
                <NavbarToggler onClick={this.onClick} />
              )}
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem active>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/app1">
                      App
                    </Link>
                  </NavItem>
                </NavbarNav>
                <NavbarNav right>
                  <NavItem>
                    <NavLink to="#">
                      <Fa icon="linkedin" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#">
                      <Fa icon="github" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#">
                      <Fa icon="facebook" />
                    </NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>

          <Jumbotron className="text-center mdb-color lighten-2 white-text z-depth-2">
            <Container>
              <h1 class="h1-reponsive mb-4 mt-2 blue-text font-bold">
                Fluid jumbotron
              </h1>
              <p class="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </Container>
          </Jumbotron>
          <Container>
            <h2 className="mb-5">Personal Information</h2>
            <form>
              <div class="row">

                <div className="col-md-6">
                  <input label="first name" icon="" />
                </div>

                <div className="col-md-6">
                  <input label="last name" icon="" />
                </div>
              </div>
              <div class="row">

                <div className="col-md-6">
                  <input label="Example Label" icon="envelope" />
                </div>
                <div className="col-md-6">
                  <input label="Example Label" icon="Lock" />
                </div>
              </div>

              <div className="col-md-6">
                <input label="Phone Number" icon="" />
              </div>

              <div className="col-md-6">
                <input label="Email" icon="" />
              </div>

              <div className="col-md-6">
                <input label="Password" icon="" />
              </div>
            </form>

          </Container>
        </header>
      </div>
    );
  }
}

export default NavbarWithIntro;
