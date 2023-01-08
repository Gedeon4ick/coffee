import React from 'react';
import Title from '../../components/titul/MyTitul';
import Hr from '../UI/hr/Hr'; 
import './currentCard.scss'

const CurentCard = ({card}) => {
    return (
        <div className='container'>
            <div className="currentCard">
                <div className="currentCard__img">
                    <img src={card.image} alt="" />
                </div>
                <div className="currentCard__text">
                    <Title>
                        {card.title}
                    </Title>
                    <Hr/>
                    <div className="currentCard__text_title">
                        <span>Country:</span> {card.country}
                    </div>
                    <div className="currentCard__text_descr">
                        <span>Description:</span> {card.descr}
                    </div>
                    <div className="currentCard__text_price">
                        Price: <span>{card.price}</span>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default CurentCard;