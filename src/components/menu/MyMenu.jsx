import React from 'react';
import '../../style/style.scss'
import '../menu/MyMenu.scss'
import MyTitul from '../titul/MyTitul'
import Nav from '../nav/Nav'
import Title from '../UI/title/Title';
import title from '../../location/en/titleCofeHouse.json'
import Hr from '../UI/hr/Hr';


const MyMenu = ({nameMenu}) => {
    const obj = title.main;
    console.log(obj.className);
    return (
        <div>
            <Nav color={true} nameMenu={nameMenu}/>
            <MyTitul bg={obj.className}>
                <Title content={obj}/>
                <Hr/>
            </MyTitul>
        </div>
        
    );
};

export default MyMenu;