import React from 'react';
import logo from '../../icons/coffee-beans.png'
import logoBlack from '../../icons/coffee-beans-black.png'
import Ul from '../unorder/Ul'

const Nav = ({nameMenu, color}) => {
    
    return (
        <div>
            <nav>
                <div className="container">
                    <div className='menu'>
                        {color ? <img src={logo} alt="logo" /> : <img src={logoBlack} alt="logo" />}
                        <Ul style={color ? {color: "white"} : {color: 'black'}} nameMenu={nameMenu}/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;