import React from 'react';
import { Container } from 'mdbreact';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about pt-5 pb-5" id="about">
                <Container className="my-5">


                    <h2 className="h1-responsive font-weight-bold text-center my-5 sec-head">About Emergency Central</h2>

                    <p className="lead grey-text text-center w-responsive mx-auto mb-5">Emergency Central is a one-click application that will do the following:</p>
                    
                    <hr className="my-4"></hr>

                    <div className="row">

                        <div className="col-lg-5 text-center text-lg-left mt-4">
                            <img className="img-fluid" src="https://misfitsandheroes.files.wordpress.com/2016/06/caduceus-medical-symbol.png?w=640" alt="caduceus"></img>
                        </div>



                        <div className="col-lg-7">


                            <div className="row mb-3">


                                <div className="col-1">
                                    <i className="fa fa-mail-forward fa-lg red-text"></i>
                                </div>



                                <div className="col-xl-10 col-md-11 col-10">
                                    <h5 className="font-weight-bold mb-3">Call 911</h5>
                                    <p className="grey-text">Emergency Central will call 911 for you.</p>
                                </div>


                            </div>



                            <div className="row mb-3">


                                <div className="col-1">
                                    <i className="fa fa-mail-forward fa-lg red-text"></i>
                                </div>



                                <div className="col-xl-10 col-md-11 col-10">
                                    <h5 className="font-weight-bold mb-3">Text Emergency Services your medical information</h5>
                                    <p className="grey-text">Our app wil also send your medical information to emergency services so paramedics will arrive on scene knowing your medical history, saving a step for you and them in treating you.</p>
                                </div>


                            </div>



                            <div className="row">


                                <div className="col-1">
                                    <i className="fa fa-mail-forward fa-lg red-text"></i>
                                </div>



                                <div className="col-xl-10 col-md-11 col-10">
                                    <h5 className="font-weight-bold mb-3">Notify a personal emergency contact!</h5>
                                    <p className="grey-text mb-0">Our app will send a text message to a perssonal contact of your choosing, to notify them that you are in an emergency situation.</p>
                                </div>


                            </div>


                        </div>


                    </div>
                </Container>
            </div>
        )
    }
}

export default About;