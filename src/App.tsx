import { useState } from 'react';
import Card from './Card';
import { DECK_OF_ILLUSIONS, CardData } from './decks';
import { shuffle } from './utilities';

function App() {
  const [cardDrawn, setCardDrawn] = useState<boolean>(false);
  const [deck,] = useState<CardData[]>(shuffle(DECK_OF_ILLUSIONS))
  // const reshuffle = () => {
  //   console.log('Reshuffling deck');
  //   setDeck(shuffle(deck));
  //   setCardDrawn(false);
  // }

  return (
    <div className="bg-gray-500 flex flex-col items-center justify-center h-screen">
      {/* <button onClick={reshuffle} className="rounded-2xl border-4 border-solid border-black m-10 p-4 bg-white w-1/2 click:bg-red-200">
          <h1>Reshuffle</h1>
      </button> */}
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
    </div>
  )
}

export default App;
