import React from 'react';
import MyMenu from '../components/menu/MyMenu'
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import main from '../location/en/descr.json' 


const Home = ({nameMenu}) => {
    const obj = main.main
    console.log(obj);
    return (
        <div>
            <MyMenu nameMenu={nameMenu}/>
            <About content={obj}/>
        </div>
    );
};

export default Home;