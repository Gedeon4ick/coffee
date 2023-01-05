import React, { Children } from 'react';
import './MyTitul.scss'
import Hr from '../UI/hr/Hr'
import Title from '../UI/title/Title';
import MyByttom from '../UI/button/MyByttom';
import title from '../../location/en/titleCofeHouse.json'
// import bg from '../../img/OurCoffeBg.png'

const MyTitul = (props) => {
    const {children, bg} = props
    console.log(bg);
    return (
        <div className={'titul ' + bg}>
            {children}
        </div>
    );
};

export default MyTitul;