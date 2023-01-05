import React from 'react';
import './Title.scss'

const Title = ({content}) => {
    const {title} = content
    return (
        <div className='title'>
            {title}
        </div>
    );
};

export default Title;