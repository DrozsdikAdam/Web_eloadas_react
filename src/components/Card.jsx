import React from 'react';
import CardStyles from '../styles/card.module.css'

 const Card = (props) => {
    let cardClassName = `${CardStyles.card}`;

    
  if (props.card.status === 'active') {
    cardClassName += ` ${CardStyles.active}`; 
  } else if (props.card.status === 'active matched') {
    cardClassName += ` ${CardStyles.active} ${CardStyles.matched}`; 
  } else if (props.card.status === 'unmatch') {
    cardClassName += ` ${CardStyles.unmatch}`; 
  } 

 
    return (
      <div className={cardClassName} onClick={() => props.clickhandler(props.index)}>
        <img src={props.card.img} className={CardStyles.picture} alt={props.card.name} />
      </div>
    );
  }

  export default Card;