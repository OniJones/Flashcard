import React, { useState, useEffect } from 'react';
import { readDeck } from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import CardStudy from './CardStudy';

export default function Study() {
    const [ selectedDeck, setSelectedDeck ] = useState({ cards: [] });
    const { deckId } = useParams();

    useEffect(() => {
        const abortController = new AbortController()

        readDeck(deckId, abortController.signal).then(setSelectedDeck)
    }, [deckId]);

    if (!selectedDeck.id) {
        return <p>Loading...</p>
    } else if (selectedDeck.cards.length < 3) {
        return (
            <div>
                <h2><span>Study</span>:<span>{ selectedDeck.name }</span></h2>
                <p>Not Enough Cards</p>
                <Link to={`/decks/${deckId}/cards/new`}>
                    <button type='button' className='btn btn-primary'>
                        Add Cards
                    </button>
                </Link>
            </div>
        );
    } else {
        return (
            <div>
                <nav aria-label='breadcrumb'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='breadcrumb-item'>
                            <Link to={`/decks/${deckId}`}>{ selectedDeck.name }</Link>
                        </li>
                        <li className='breadcrumb-item active' aria-current='page'>
                            Study
                        </li>
                    </ol>
                </nav>
                <h1>Study: {selectedDeck.name}</h1>
                <CardStudy selectedDeck={selectedDeck} />
            </div>
        );
    }
}
