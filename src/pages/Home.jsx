import React from 'react';
import MyMenu from '../components/menu/MyMenu'
import Nav from '../components/nav/Nav';

const Home = ({nameMenu}) => {
    return (
        <div>
            <MyMenu nameMenu={nameMenu}/>
            <Nav  nameMenu={nameMenu}/>
        </div>
    );
};

export default Home;