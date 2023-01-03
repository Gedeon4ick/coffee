import React from 'react';

const Li = ({element, style}) => {
    const {id, name} = element;
    return (
        <div>
            <li><a style={style} href="#">{name}</a></li>
        </div>
    );
};

export default Li;