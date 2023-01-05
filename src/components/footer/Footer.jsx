import React from 'react';
import Nav from '../nav/Nav';
import Hr from '../UI/hr/Hr';
import './footer.scss'

const Footer = ({nameMenu}) => {
    return (
        <div className='footer'>
            <Nav nameMenu={nameMenu}/>
            <Hr black={true}/>
        </div>
    );
};

export default Footer;