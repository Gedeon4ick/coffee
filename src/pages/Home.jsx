import React from 'react';
import PageTop from '../components/menu/PageTop'
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import main from '../location/en/About.json' 
import Title from '../components/UI/title/Title';
import title from '../location/en/PageList.json';
import Hr from '../components/UI/hr/Hr';
import MyButton from '../components/UI/button/MyButton';
import Footer from '../components/footer/Footer';


const Home = ({nameMenu}) => {
    const obj = main.main
    const objHeader =  title.main;
    console.log(objHeader);
    return (
        <div>
            <PageTop bg={objHeader.className} nameMenu={nameMenu}>
                <Title content={objHeader}/>
                    <Hr/>
                    <div className="descr">{objHeader.descr}</div>
                    <MyButton/>
            </PageTop>
            <About content={obj}/>
            <Footer nameMenu={nameMenu}/>
        </div>
    );
};

export default Home;