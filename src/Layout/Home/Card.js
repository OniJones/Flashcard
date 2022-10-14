import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({ card, selectedDeck }) {
	const history = useHistory();
	const { url } = useRouteMatch();
	const cardId = card.id;

	// async function deleteHandler() {
	// 	const abortController = new AbortController();
	// 	if (
	// 		window.confirm("Delete this card?\n\nYou will not be able to recover it.")
	// 	) {
	// 		await deleteCard(card.id, abortController.signal);
	// 		history.push(`/decks/${deckId}`);
	// 	}
	// 	return () => abortController.abort();
	// }

	const deleteHandler = () => {
		const abortController = new AbortController();
		window.confirm("Delete this card?\n\nYou will not be able to recover it.") ? deleteCard(cardId, abortController.signal).then(history.go("0")) : history.go("0")
	}

	return (
		// <div>
		// 	<div className='container mb-5'>
        //         <div className='card' style={{ width: '50rem' }}>
        //             <div className='card-body'>
        //                 <p className='card-text'>{ card.front }</p>
        //                 <p>{ card.back }</p>

        //                 <Link
        //                     to={`/decks/${deckId}/cards/${card.id}/edit`}
        //                     className='card-link'
        //                 >
        //                     <button className='btn btn-danger ml-3' onClick={deleteHandler}>
        //                         Delete
        //                     </button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
		// </div>

		<main>
			<section className="card">
				<div className="container mb-5">
					<p className="card-text">{ card.front }</p>
					<p>{ card.back }</p>
				</div>
				<div className="d-flex">
					<Link to={`${url}/cards/$card.id/edit`}>
						<button type="button" className="btn btn-secondary">Edit</button>
					</Link>
					<button type="button" className="btn btn-danger ml-3" onClick={deleteHandler}>Delete</button>
				</div>
			</section>
		</main>
	);
}
