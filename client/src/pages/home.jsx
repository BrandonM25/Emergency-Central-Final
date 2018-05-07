import React, {Component} from 'react';
import NavbarWithIntro from '../components/NavbarWithIntro';
import Footer from '../components/Footer';
import Team from '../components/Team';

class Home extends Component {
    render() {
        return (
            <div>
                <NavbarWithIntro />
                <Team />
                <Footer />                
            </div>
        )
    }
}

export default Home;
export const trueHome = '/';