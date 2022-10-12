import React, { useState, useEffect } from 'react';
import { readDeck } from '../../utils/api';
import { useParams } from 'react-router-dom';
import CardStudy from './CardStudy';

export default function Study() {
    const [ selectedDeck, setSelectedDeck ] = useState({ cards: [] });
    const { deckId } = useParams();
    console.log(deckId);

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchDecks() {
            const decksData = await readDeck(deckId, abortController.signal);
            setSelectedDeck(decksData);
        }
        fetchDecks();
        return () => abortController.abort();
    }, [deckId]);

    return (
        <div>
            <nav aria-label='breadcrumb'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href='/'>Home</a>
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
