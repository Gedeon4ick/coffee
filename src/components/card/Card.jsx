import React from 'react';
import './card.scss'

const Card = ({element}) => {
    return (
        <div className='card'>
            <img src={element.image} alt="Photo" />
            <div className="title">
                {element.title}
            </div>
            <div>
                {element.country}
            </div>
            <div className="price">
                {element.price}
            </div>
        </div>
    );
};

export default Card;