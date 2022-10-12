import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({ card, deckId, selectedDeck }) {
	const history = useHistory();

	async function deleteHandler() {
		const abortController = new AbortController();
		if (
			window.confirm("Delete this card?\n\nYou will not be able to recover it.")
		) {
			await deleteCard(card.id, abortController.signal);
			history.push("/");
		}
		return () => abortController.abort();
	}

	return (
		<div>
			<div className='container mb-5'>
                <div className='card' style={{ width: '50rem' }}>
                    <div className='card-body'>
                        <p className='card-text'>{ card.front }</p>
                        <p>{ card.back }</p>

                        <Link
                            to={`/decks/${deckId}/cards/${card.id}/edit`}
                            className='card-link'
                        >
                            <button className='btn btn-danger ml-3' onClick={deleteHandler}>
                                Delete
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
		</div>
	);
}
