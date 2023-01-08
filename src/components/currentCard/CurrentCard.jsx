import {React, useState } from 'react';
import Title from '../../components/titul/MyTitul';
import Hr from '../UI/hr/Hr'; 
import './currentCard.scss'
import MyModal from '../myModal/MyModal';

const CurentCard = ({card, back}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

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
                    <Hr black={true}/>
                    <div className="currentCard__text_title">
                        <span>Country:</span> {card.country}
                    </div>
                    <div className="currentCard__text_descr">
                        <span> Description:</span> {card.descr}
                    </div>
                    <div className="currentCard__text_price">
                        Price: <span>{card.price}</span>
                    </div>
                    <div className="currentCard__text_btn">
                        <button onClick={() => back(null)} >Back</button>
                        <button onClick={openModal}>Buy</button>
                    </div>
                </div>
                {isModalOpen && (
                    <MyModal closeModal={closeModal}/>
                )}
            </div>
           

        </div>
    );
};

export default CurentCard;

