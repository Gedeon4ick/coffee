import React from 'react';
import Nav from '../components/nav/Nav';

const Our = ({nameMenu}) => {
    return (
        <div>
            <Nav  nameMenu={nameMenu}/>
            <Nav  nameMenu={nameMenu}/>
        </div>
    );
};

export default Our;