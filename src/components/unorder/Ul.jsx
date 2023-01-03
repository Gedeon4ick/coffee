import React from 'react';
import Li from '../li/Li';

const Ul = ({nameMenu, style}) => {
    return (
        <ul>
            {nameMenu.map((element) => {
                return <Li style={style} element={element} key={element.id}/>
            })}
        </ul>
    );
};

export default Ul;