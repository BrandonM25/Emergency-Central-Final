import React, {Component} from 'react';
import Footer from '../components/Footer';
import NavbarAlone from '../components/NavbarAlone';

class App1 extends Component {
    render() {
        return (
            <div>
                <NavbarAlone />
                <Footer />                
            </div>
        )
    }
}

export default App1;