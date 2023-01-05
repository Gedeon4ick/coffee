import React from 'react';
import PageTop from '../components/menu/PageTop';
import Nav from '../components/nav/Nav';
import MyTitul from '../components/titul/MyTitul';
import our from '../location/en/PageList.json';
import Title from '../components/UI/title/Title';
import About from '../components/about/About';
import ab from '../location/en/About.json';
import aboutImg from '../img/girlDribgCoffe.jpg';


const Our = ({nameMenu}) => {
    const obj = our.ourCoffee
    
    return (
        <div>
            <PageTop bg={obj.className}nameMenu={nameMenu}>
                <Title content={obj}/>  
            </PageTop>
            <About aboutImg={aboutImg} content={ab.about}/>
        </div>
    );
};

export default Our;