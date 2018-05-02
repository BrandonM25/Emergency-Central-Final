import React, {Component} from 'react';
import {Router} from 'react-router';
import Register from '../pages/register';
import {Button} from 'mdbreact';

class ButtonReg extends React.Component{
    render(){
        return(
            <Router path="/register" component={Register}>
                <Button color="danger" className="registerBtn">Register</Button>
            </Router>
        )
    }
}

export default ButtonReg;