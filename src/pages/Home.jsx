import React from 'react';
import PageTop from '../components/menu/PageTop'
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import main from '../location/en/About.json' 
import Title from '../components/UI/title/Title';
import title from '../location/en/PageList.json';
import Hr from '../components/UI/hr/Hr';
import MyButton from '../components/UI/button/MyButton';
import CardList from '../components/cardPage/CardList'
import Footer from '../components/footer/Footer';
import card from '../location/en/card.json'
import solimo from "../img/FYP.png";
import presto from "../img/presto.png";
import aromistico from "../img/aromistico.png";




const Home = ({nameMenu}) => {
    const obj = main.main
    const objHeader =  title.main;

    const arr = [
        {id: 1, title: "Solimo Coffee Beans 2 kg", price: "10.73$", image: {solimo}},
        {id: 2, title: "Presto Coffee Beans 1 kg", price: "15.99$", image: {presto}},
        {id: 3, title: "AROMISTICO Coffee 1 kg", price: "6.99$", image: {aromistico}},
    ]
    return (
        <div>
            <PageTop bg={objHeader.className} nameMenu={nameMenu}>
                <Title content={objHeader}/>
                    <Hr/>
                    <div className="descr">{objHeader.descr}</div>
                    <MyButton/>
            </PageTop>
            <About content={obj}/>
            <CardList arr={arr}/>
            <Footer nameMenu={nameMenu}/>
        </div>
    );
};

export default Home;