import React from 'react';

const Card = ({element}) => {
    const a = Object.keys(element.image); 
    console.log(a);
    return (
        <div className='card'>
            <img src={a} alt="Photo" />
            <div className="title">
                {element.title}
            </div>
            <div className="price">
                {element.price}
            </div>
        </div>
    );
};

export default Card;