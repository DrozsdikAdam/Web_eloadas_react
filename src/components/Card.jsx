import React from 'react';
import A from '../images/A.jfif'
import B from '../images/B.jpg'
import C from '../images/C.png'
import D from '../images/D.jpg'
import CardStyles from '../styles/card.module.css'


const Card = (props) => {

    const imageMap = {
        A: A,
        B: B,
        C: C,
        D: D,
    };

    const imageSource = imageMap[props.image];

 return(
    <>
        <div className={CardStyles.card}>
            <img src={imageSource} className={CardStyles.image} />
        </div>
    </>
 );
}

export default Card;