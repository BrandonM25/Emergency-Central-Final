import React, {Component} from 'react';
import Footer from '../components/Footer';
import NavbarHome from '../components/NavbarHome';

class AppHome extends Component {
    render() {
        return (
            <div>
                <NavbarHome />
                <Footer />                
            </div>
        )
    }
}

export default AppHome;
export const appHome = '/appHome';