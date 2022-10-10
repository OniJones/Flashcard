import React from 'react';
import { Link, useParams } from 'react-router-dom';


export default function NotEnoughCards({ cards }) {
    const { deckId } = useParams();

  return (
    <div>
        <div className='row'>
            <div className='col'>
                <h3>Not Enough Cards</h3>
                <p>
                    You need at least 3 cards to study,
                    there are {cards.length} in this
                    deck.
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Link to={`/decks/${deckId}/cards/new`}>
                    <button type='button' className='btn btn primary'>
                        Add Cards
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );
}
