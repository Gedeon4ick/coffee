import React from 'react';
import '../../style/style.scss'
import '../menu/PageTop.scss'
import MyTitul from '../titul/MyTitul'
import Nav from '../nav/Nav'
import Title from '../UI/title/Title';
import title from '../../location/en/PageList.json'
import Hr from '../UI/hr/Hr';
import MyButton from '../UI/button/MyButton';


const PageTop = ({nameMenu, bg, children}) => {
    return (
        <div>
            <Nav color={true} nameMenu={nameMenu}/>
            <MyTitul bg={bg}>
               {children}
            </MyTitul>
        </div>
        
    );
};

export default PageTop;