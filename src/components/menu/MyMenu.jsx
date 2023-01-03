import React from 'react';
import '../../style/style.scss'
import '../menu/MyMenu.scss'
import MyTitul from '../titul/MyTitul'
import Nav from '../nav/Nav'


const MyMenu = ({nameMenu}) => {

    return (
        <div>
            <Nav color={true} nameMenu={nameMenu}/>
            <MyTitul/>
        </div>
        
    );
};

export default MyMenu;