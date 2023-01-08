import React from 'react';
import './card.scss'

const Card = ({element, titleLine, current}) => {
    return (
        <div onClick={() => current(element)} className={titleLine ? 'cardTo' : 'card'}>
            <img src={element.image} alt="Photo" />
            <div className="title">
                {element.title}
            </div>
            <div className="country">
                {element.country}
            </div>
            <div className="price">
                {element.price}
            </div>
        </div>
    );
};

export default Card;