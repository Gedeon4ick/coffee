import React from 'react';
import { Link } from 'react-router-dom'

const Li = ({element, style}) => {
    const {id, name, to} = element;
    return (
        <li>
            <Link style={style} to={to}>{name}</Link>
        </li>
    );
};

export default Li;