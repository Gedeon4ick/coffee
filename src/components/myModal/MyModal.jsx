import React, { Children } from 'react';
import './myModal.scss'

const MyModal = ({closeModal}) => {
    
    return (
        <div className="myModal" onClick={() => closeModal(false)}>
            <div className="myModal__content">
                <div className="myModal__content_title">
                    Мы с вами свяжемся!
                </div>
                <div className="myModal__content_form">
                    <div className="myModal__content_form-input">
                        <label>Ваше имя:</label>
                        <input type="name" />
                    </div>
                    <div className="myModal__content_form-input">
                        <label>Ваш email:</label>
                        <input type="email" />
                    </div>
                </div>
                <button onClick={() => closeModal(false)}>Submit</button>
            </div>
        </div>
    );
};

export default MyModal;