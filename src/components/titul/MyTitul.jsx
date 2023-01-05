import React, { Children } from 'react';
import './MyTitul.scss'


const MyTitul = (props) => {
    const {children, bg} = props
    return (
        <div className={'titul ' + bg}>
            {children}
        </div>
    );
};

export default MyTitul;