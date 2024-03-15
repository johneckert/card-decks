import { useState } from 'react';
import Card from './Card';
import { DECK_OF_ILLUSIONS, CardData } from './decks';
import { shuffle } from './utilities';

function App() {
  const [cardDrawn, setCardDrawn] = useState<boolean>(false);
  const [deck, setDeck] = useState<CardData[]>(shuffle(DECK_OF_ILLUSIONS))
  const reshuffle = () => {
    console.log('Reshuffling deck');
    setDeck(shuffle(deck));
    setCardDrawn(false);
  }

  return (
    <>
      <button onClick={reshuffle} className="rounded-2xl border-4 border-solid border-black  w-screen click:bg-red-200 m-2">
          <h1>Reshuffle</h1>
      </button>
      <div className="container h-max max-w-max flex flex-wrap bg-purple-100">
        {deck.map((card, i) => {
          return (
            <Card 
              key={`${card.title}-${i}`}
              title={card.title} 
              cardDrawn={cardDrawn} 
              setCardDrawn={setCardDrawn} 
            />
          )
        })}   
      </div>
    </>
  )
}

export default App;
