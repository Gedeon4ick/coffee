import React from 'react';
import PageTop from '../components/menu/PageTop';
import Nav from '../components/nav/Nav';
import Title from '../components/UI/title/Title';
import Bg from '../location/en/PageList.json'
import ab from '../location/en/About.json';
import About from '../components/about/About';
import aboutImg from '../img/DarkCoffee.png';
import Footer from '../components/footer/Footer';

const FYP = ({nameMenu}) => {
    const obj = Bg.ForYourPleasure; 
    return (
        <div>
            <PageTop bg={obj.className} nameMenu={nameMenu}>
                <Title content={obj}/>    
            </PageTop>       
            <About aboutImg={aboutImg} content={ab.FYP}/>
            <Footer nameMenu={nameMenu}/>     
        </div>
    );
};

export default FYP;