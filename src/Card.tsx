import React, { useState } from 'react';
import CardBack from './assets/card-back.svg';
import { CardData } from './decks';

export interface CardProps extends CardData {
    cardDrawn: boolean;
    setCardDrawn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: React.FC<CardProps> = ({ title, cardDrawn, setCardDrawn }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const imageName = title.toLowerCase().replace(/ /g, '-');
    const flipCard = () => {
      if (!cardDrawn) {
        setIsFlipped(true);
      }
      setCardDrawn(true);
    };

    return (
        <div onClick={flipCard} className={`rounded-2xl border-4 border-solid border-black h-64 w-40 flex m-0.5 ${isFlipped ? "bg-white" : "bg-gradient-to-r from-red-800 via-red-600 to-red-800"}`}>
          { isFlipped ? (
            <div className='relative flex justify-center items-center overflow-hidden'>
              <img className="object-cover w-full p-4 pb-8" src={`deckOfIllusions/${imageName}.png`} alt={title} />
              <p className="absolute px-2 bottom-0 text-center align-text-bottom text-sm">{ title }</p>
            </div>
           ) : (
              <img className="w-100" src={CardBack} alt="card back" />
           )
          } 
        </div>
    );
}

export default Card;