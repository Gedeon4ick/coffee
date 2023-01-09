import React from 'react';
import './MyButton.scss'

const MyButton = ({handleClick}) => {
    return (
        <button onClick={handleClick}>
                More
        </button>
    );
};

export default MyButton;