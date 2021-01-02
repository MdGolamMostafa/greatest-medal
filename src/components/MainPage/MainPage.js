import React from 'react';
import FooterPart from './FooterPart/FooterPart';
import Header from './Header/Header';
import ItemsPart from './ItemsPart/ItemsPart';

const MainPage = () => {
    return (
        <>
            <Header/>
            <ItemsPart/>
            <FooterPart/>
        </>
    );
};

export default MainPage;