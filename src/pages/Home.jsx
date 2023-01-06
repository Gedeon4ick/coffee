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
import arr from '../location/en/card';




const Home = ({nameMenu}) => {
    const obj = main.main
    const objHeader =  title.main;

    
    return (
        <div>
            <PageTop bg={objHeader.className} nameMenu={nameMenu}>
                <Title content={objHeader}/>
                    <Hr/>
                    <div className="descr">{objHeader.descr}</div>
                    <MyButton/>
            </PageTop>
            <About content={obj}/>
            <CardList isBest={true} titleLine={false} arr={arr}/>
            <Footer nameMenu={nameMenu}/>
        </div>
    );
};

export default Home;