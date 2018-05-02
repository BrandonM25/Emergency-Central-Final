import React from 'react';
import { Container } from 'mdbreact';
import './Team.css';
class Team extends React.Component {
    render() {
        return (
            <div className= "teamsec">
                <Container>
                    <section className="team-section pb-5">


                        <h2 className="h1 text-center py-5 sechead font-weight-bold">THE I.A.M TEAM</h2>

                        <h4 className="pb-2 text-center sechead font-weight-bold">We are a team of developers striving to make apps that will increase productivity in everyday life.</h4>

                        <hr className="my-4"></hr>

                        <div className="row text-center wow fadeInUp">

                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card card-body">
                                    <div className="avatar mx-auto my-3 teamate">
                                        <img src="https://avatars2.githubusercontent.com/u/30201591?s=460&v=4" className="rounded-circle img-fluid"></img>
                                    </div>
                                    <h5 className="font-weight-bold sechead">
                                        <strong>James Henley</strong>
                                    </h5>
                                    <p className="grey-text">Backend Developer</p>

                                    <ul className="list-unstyled">

                                        <a className="icons-sm fb-ic">
                                            <i className="fa fa-linkedin elegant-text"> </i>
                                        </a>

                                        <a className="icons-sm tw-ic">
                                            <i className="fa fa-github elegant-text"> </i>
                                        </a>
                                    </ul>
                                </div>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card card-body">
                                    <div className="avatar mx-auto my-3 teamate">
                                        <img src="https://avatars2.githubusercontent.com/u/2588384?s=460&v=4" className="rounded-circle img-fluid"></img>
                                    </div>
                                    <h5 className="font-weight-bold sechead">
                                        <strong>Dean Dyer</strong>
                                    </h5>
                                    <p className="grey-text">Frontend Developer</p>

                                    <ul className="list-unstyled">

                                        <a className="icons-sm fb-ic">
                                            <i className="fa fa-linkedin elegant-text"> </i>
                                        </a>

                                        <a className="icons-sm ins-ic">
                                            <i className="fa fa-github elegant-text"> </i>
                                        </a>
                                    </ul>
                                </div>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card card-body">
                                    <div className="avatar mx-auto my-3 teamate">
                                        <img src="https://avatars1.githubusercontent.com/u/31494833?s=460&v=4" className="rounded-circle img-fluid"></img>
                                    </div>
                                    <h5 className="font-weight-bold sechead">
                                        <strong>Brad Kornegay</strong>
                                    </h5>
                                    <p className="grey-text">Backend Developer</p>

                                    <ul className="list-unstyled">

                                        <a className="icons-sm fb-ic">
                                            <i className="fa fa-linkedin elegant-text"> </i>
                                        </a>

                                        <a className="icons-sm ins-ic">
                                            <i className="fa fa-github elegant-text"> </i>
                                        </a>

                                    </ul>
                                </div>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card card-body">
                                    <div className="avatar mx-auto my-3 teamate">
                                        <img src="https://avatars2.githubusercontent.com/u/29951162?s=460&v=4" className="rounded-circle img-fluid"></img>
                                    </div>
                                    <h5 className="font-weight-bold sechead">
                                        <strong>Brandon Matthews</strong>
                                    </h5>

                                    <p className="grey-text">Frontend Developer</p>

                                    <ul className="list-unstyled">

                                        <a className="icons-sm fb-ic">
                                            <i className="fa fa-linkedin elegant-text">  </i>
                                        </a>

                                        <a className="icons-sm ins-ic">
                                            <i className="fa fa-github elegant-text">  </i>
                                        </a>
                                    </ul>
                                </div>
                            </div>


                        </div>


                    </section>

                </Container>
            </div>
        )
    }
}

export default Team;