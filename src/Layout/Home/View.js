import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { readDeck, deleteDeck } from '../../utils/api';
import Card from './Card';

export default function View({ cards, setCards }) {
    const [ selectedDeck, setSelectedDeck ] = useState([]);

    const { deckId } = useParams();
    const history = useHistory();

    const deleteHandler = () => {
		const abortController = new AbortController();
		window.confirm("Delete this deck?\n\nYou will not be able to recover it.") ? deleteDeck(deckId, abortController.signal).then(history.push("/")) : history.go("/")
	}

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchDecks() {
            const decksData = await readDeck(deckId, abortController.signal);
            setSelectedDeck(decksData);
            setCards(decksData.cards);
        }
        fetchDecks();
        return () => abortController.abort();
    }, [ deckId, setCards ]);

    const cardList = cards.map((card, index) => (
        <Card card={card} key={index} deckId={deckId} selectedDeck={selectedDeck} />
    ));

  return (
    <div>
      <div className='container'>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                    { selectedDeck.name }
                </li>
            </ol>
        </nav>
        <div className='card border-0' style={{ width: '50rem' }}>
            <div className='card-body'>
                <h4 className='card-title'>{ selectedDeck.name }</h4>
                <p className='card-text'>{selectedDeck.description}</p>
                <Link to={`/decks/${ deckId }/edit`} className='card-link'>
                    <button className='btn btn-secondary'>Edit</button>
                </Link>
                <Link to={`/decks/${ deckId }/study`} className='card-link'>
                    <button className='btn btn-primary'>Study</button>
                </Link>
                <Link to={`/decks/${ deckId }/cards/new`} className='card-link'>
                    <button className='btn btn-primary'>Add Cards</button>
                </Link>
                <button className='btn btn-danger ml-3' onClick={ deleteHandler }>
                    Delete
                </button>
            </div>
        </div>
        <h3>Cards</h3>

        { cardList }
      </div>
    </div>
  );
}
