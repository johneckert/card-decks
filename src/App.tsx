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
    <div className="bg-gray-500 flex flex-col items-center justify-center h-screen">
      <div className="container h-max max-w-max flex flex-wrap items-center justify-center">
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
      <button onClick={reshuffle} className="rounded-2xl text-zinc-200 border-2 border-solid border-zinc-900 m-2 p-4 w-1/2 bg-zinc-800 hover:bg-zinc-700  active:bg-zinc-600">
          <h1>Shuffle</h1>
      </button>
    </div>
  )
}

export default App;
