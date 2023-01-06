import React from 'react';
import './cardPage.scss'
import Card from '../../components/card/Card';

const CardPage = ({arr, titleLine, isBest}) => {
    return (
        <div className={isBest ? 'cardPage ' + "best" : "cardPage" }>
            <div className="container">
                { titleLine ? <div className='line'></div> : <div className='title'>Our best</div> }
                <div className="wr">
                    {arr.map((element) => {
                        if (isBest) {
                            if (element.isBest) {
                                return<Card element={element} key={element.id}/>
                            }
                        }else {
                            return <Card element={element} key={element.id}/>
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default CardPage;

