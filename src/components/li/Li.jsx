import React from 'react';

const Li = ({element}) => {
    const {id, name} = element;
    return (
        <div>
            <li><a href="#">{name}</a></li>
        </div>
    );
};

export default Li;