import React from 'react';
import Li from '../li/Li';

const Ul = ({nameMenu}) => {
    return (
        <ul>
            {nameMenu.map((element) => {
                return <Li element={element} key={element.id}/>
            })}
        </ul>
    );
};

export default Ul;