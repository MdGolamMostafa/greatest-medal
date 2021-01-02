import React from 'react';
import Container from 'react-bootstrap/Container';
import Raw from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from './logo.png';
import medal from './medal.png';
import givenMedal from './given-medal.png';
import './Header.css';
const Header = () => {
    return (
        <Container fluid>
            <div className = 'd-flex justify-content-center'>
                <img className="w-50 h-50 d-flex justify-content-center" src={logo} alt="Company logo"/>
            </div>
            <Raw  className=" col-12">
                    <Col xs={4} md={3}>
                        <img className="w-100 h-100 d-flex justify-content-end"  src={medal} alt=""/>
                    </Col>
                    <Col  xs={12} md={9}>
                        <h6>
                            C.R.I. PUMPS WINS THE NATIONAL 
                            ENERGY CONSERVATION AWARD 2018 
                            for the 4th time.
                        </h6>
                        <ul>
                            <li>
                                C.R.I.'s energy efficient products are
                                well recognized by various Government 
                                Institutions, as trustworthy products 
                                for various projects across the globe
                                to save energy.
                            </li>
                            <li>
                                C.R.I. is the highest contributor
                                in the country for the projects of 
                                EESL (Energy Efficiency Services Limited) 
                                to replace the old inefficient pumps with 
                                5 Star rated energy efficient smart pumps
                                with IoT enabled control panel. 
                            </li>
                        </ul>
                        <img className="w-100 h-100 d-flex justify-content-end" src={givenMedal} alt=""/>
                    <h6>
                        Government of India has awarded 
                        the <span className="font-weight-bold" >"National Energy Conservation Award 2018"</span> . 
                        Mr. G. Selvaraj, Joint Managing Director of 
                        C.R.I. Group received the award from Smt. 
                        Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                        Raj Kumar Singh, Honorable Minister of State.
                    </h6>
                    </Col>
                
                </Raw>
        </Container>
    );
};

export default Header;