import React, {Component} from 'react';
import Footer from '../components/Footer';
import NavbarEditInfo from '../components/NavbarEditInfo';

class EditInfo extends Component {
    render() {
        return (
            <div>
                <NavbarEditInfo />
                <Footer />                
            </div>
        )
    }
}

export default EditInfo;