import React, {Component} from 'react';
import Footer from '../components/Footer';
import NavbarAlone from '../components/NavbarRegister';

class Register extends Component {
    render() {
        return (
            <div>
                <NavbarAlone />
                <Footer />                
            </div>
        )
    }
}

export default Register;