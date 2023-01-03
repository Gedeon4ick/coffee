import React from 'react';
import logo from '../../icons/coffee-beans.png'
import '../../style/style.scss'
import '../menu/MyMenu.scss'
import MyTitul from '../titul/MyTitul'
import Ul from '../unorder/Ul'


const MyMenu = ({nameMenu}) => {
    console.log(nameMenu);
    return (
        <div>
            <nav>
                <div className="container">
                    <div className='menu'>
                        <img src={logo} alt="logo" />
                        <Ul nameMenu={nameMenu}/>
                    </div>
                </div>
            </nav>
            <MyTitul/>
        </div>
        
    );
};

export default MyMenu;