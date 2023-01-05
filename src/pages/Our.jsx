import React from 'react';
import Nav from '../components/nav/Nav';
import MyTitul from '../components/titul/MyTitul';
import our from '../location/en/titleCofeHouse.json'

const Our = ({nameMenu}) => {
    const obj = our.ourCoffee
    return (
        <div>
            <Nav  color={true} nameMenu={nameMenu}/>
            <MyTitul bg={obj.className}/>
        </div>
    );
};

export default Our;