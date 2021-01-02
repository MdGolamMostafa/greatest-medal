import React from 'react';
import Container from 'react-bootstrap/Container';
import Raw from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import items from './items.png';
const ItemsPart = () => {
    return (
        <Container className="mt-5" fluid>
            <div className = 'd-flex justify-content-center '>
                <img className="w-75 h-75 d-flex justify-content-center" src={items} alt="Company logo"/>
            </div>
                <h6 className = 'mt-3 d-flex justify-content-center '>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h6>
            <hr className ='mx-3 my-4 bg-danger'/>
            <h6 className = "font-weight-bold text-center m-2">
                C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </h6>
            <h6 className = 'text-center m-4'>
                CHEMICALS <span className = 'text-danger'> &#124;</span> PROCESS POWER WATER
                <span className = 'text-danger'> &#124;</span> WASTE WATER OILS <span className = 'text-danger'> &#124;</span> GAS PHARMA 
                SUGARS <span className = 'text-danger'> &#124;</span> DISTILLERIES PAPER <span className = 'text-danger'> &#124; </span> 
                PULP MARINE <span className = 'text-danger'> &#124;</span> DEFENCE METAL <span className = 'text-danger'> &#124; </span> 
                MINING FOOD <span className = 'text-danger'> &#124;</span> BEVERAGE PETROCHEMICAL 
                <span className = 'text-danger'> &#124;</span> REFINERIES SOLAR BUILDING HVAC FIRE
                FIGHTING AGRICULTURE <span className = 'text-danger'> &#124;</span> RESIDENTIAL
            </h6>
        </Container>
    );
};

export default ItemsPart;