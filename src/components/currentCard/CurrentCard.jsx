import {React, useState, useEffect } from 'react';
import Title from '../../components/titul/MyTitul';
import Hr from '../UI/hr/Hr'; 
import './currentCard.scss'
import MyModal from '../myModal/MyModal';

const CurentCard = ({card, back}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        function onOpen() {
            document.body.style.marginRight = `${getScrollbarWidth()}px`;
            document.body.classList.add("modal-open");
            
        }

        function onClose() {
            document.body.classList.remove("modal-open");
            document.body.style.marginRight = null;
        }

        if (isModalOpen) {
            onOpen()
        } else {
            onClose();
        }
    }, [isModalOpen, scrollY]);

    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }


    function openModal() {
        setIsModalOpen(true);
    
    }

    function closeModal(e) {
        console.log(e);
        if (e.target.className == "myModal" || e.target.tagName == "BUTTON") {
            setIsModalOpen(false);
        }

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

