import React, { useState } from 'react';
import CardBack from './assets/card-back.svg';
import { CardData } from './decks';

export interface CardProps extends CardData {
    cardDrawn: boolean;
    setCardDrawn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: React.FC<CardProps> = ({ title, cardDrawn, setCardDrawn }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const flipCard = () => {
      if (!cardDrawn) {
        setIsFlipped(true);
      }
      setCardDrawn(true);
    };

    return (
        <div onClick={flipCard} className="rounded-2xl border-4 border-solid border-black bg-purple-300 h-48 w-36 flex m-2">
          { isFlipped ? (
              <h1>{ title }</h1>
           ) : (
              <img className="w-100" src={CardBack} alt="card back" />
           )
          } 
        </div>
    );
}

export default Card;