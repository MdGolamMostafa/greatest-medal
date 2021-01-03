import React from 'react';
import phones from './phone1.png';
import facebook from './facebook1.png';
import web from './web.png';
import './FooterPart.css';

const FooterPart = () => {
    return (
        <div className = 'd-flex justify-content-around footer-background-color pt-2 pb-5 m-2'>
            <div className = 'd-flex justify-content-center flex-row'>
                <img src={phones} alt=""/>
                    <small className = 'flex-style text-white'>
                        Toll free<span className ='font-weight-bold'> 1800 200 1234</span>
                    </small>
            </div>

            <div className = 'd-flex justify-content-center flex-row'>
                <img src={facebook} alt=""/>
                    <small className = 'flex-style text-white'>www.facebook.com/cripumps</small>
            </div>

            <div className = 'd-flex justify-content-center flex-row'>
                <img src={web} alt=""/>
                    <small className = 'flex-style text-white'>www.crigroups.com</small>
            </div>
        </div>
    );
};

export default FooterPart;