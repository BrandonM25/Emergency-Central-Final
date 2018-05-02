import React from 'react';
//import { Link } from 'react-router-dom';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="unique-color" className="font-small pt-4 mt-4">
                
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="/"> Intelligent App Masters </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}
      
export default FooterPage;
                      
